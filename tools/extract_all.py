# -*- coding: utf-8 -*-
import urllib.request
import json
import time

def extract_fb_data(html):
    idx = html.find('FB_PUBLIC_LOAD_DATA_')
    if idx == -1:
        return None
    start = html.find('[', idx)
    if start == -1:
        return None
    depth = 0
    in_str = False
    escape = False
    for i in range(start, len(html)):
        c = html[i]
        if escape:
            escape = False
            continue
        if c == '\\':
            escape = True
            continue
        if c == '"':
            in_str = not in_str
            continue
        if not in_str:
            if c == '[':
                depth += 1
            elif c == ']':
                depth -= 1
                if depth == 0:
                    return json.loads(html[start:i+1])
    return None

direct_urls = {
    1: ('Chương 1: Tổng quan OOP', 'https://docs.google.com/forms/d/e/1FAIpQLSe6p5uPYYLjPbrA4nd2jh0HpmfJjMDWbWthHp3nW-lmpW5tLQ/viewform'),
    2: ('Chương 2: Lớp và Đối tượng (C++)', 'https://docs.google.com/forms/d/e/1FAIpQLScczM8_FWMfUCdT7QkRcrhlJRFmOzW2Azddwj57zJhtUKEP6w/viewform'),
    3: ('Chương 3: Tính Kế thừa (C++)', 'https://docs.google.com/forms/d/e/1FAIpQLSfKBKcJcMt8m2QdSEogQv1bCj09hJwKDOkWQuhddcq6bIR-7A/viewform'),
    4: ('Chương 4: Tính Đa hình (C++)', 'https://docs.google.com/forms/d/e/1FAIpQLSccnNYIUAsuzn-ztCD5wW1bVJIrvCSDxkaQNNQzuRjyoMbrLQ/viewform'),
    5: ('Chương 5: Lập trình OOP C#', 'https://docs.google.com/forms/d/e/1FAIpQLSeKxla6iMyA6Avxn3oAZaT-hykjxmYEAcDqKOuWHUXcG5sfVQ/viewform'),
    6: ('Chương 6: Lập trình OOP Java', 'https://docs.google.com/forms/d/e/1FAIpQLSc0uAYbCQCP-vmIGD-f0Gh4ZtE9wySnG5RE3hupa0nwwnoxOw/viewform')
}

all_data = {}

for ch, (ch_name, url) in direct_urls.items():
    print(f"\nFetching Chapter {ch}: {ch_name}...")
    success = False
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            })
            with urllib.request.urlopen(req, timeout=30) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
            data = extract_fb_data(html)
            if not data:
                raise Exception("Could not find FB_PUBLIC_LOAD_DATA_")
            
            items = data[1][1]
            q_list = []
            for it in items:
                if len(it) > 4 and it[4] and len(it[4]) > 0 and len(it[4][0]) > 1 and it[4][0][1]:
                    q_text = it[1].strip() if it[1] else ""
                    opts = [opt[0].strip() for opt in it[4][0][1] if opt and opt[0]]
                    q_list.append({
                        "raw_id": it[0],
                        "question": q_text,
                        "options": opts
                    })
            print(f" -> Success! Fetched {len(q_list)} questions for Chapter {ch}")
            all_data[ch] = {
                "title": ch_name,
                "questions": q_list
            }
            success = True
            break
        except Exception as e:
            print(f" -> Attempt {attempt+1} failed: {e}. Retrying in 2 seconds...")
            time.sleep(2)
            
    if not success:
        print(f"ERROR: Could not fetch Chapter {ch} after 5 attempts!")

with open("raw_oop_extracted.json", "w", encoding="utf-8") as f:
    json.dump(all_data, f, ensure_ascii=False, indent=2)

print("\nSaved raw_oop_extracted.json successfully!")
