# -*- coding: utf-8 -*-
import urllib.request
import json
import re

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
                    try:
                        return json.loads(html[start:i+1])
                    except Exception as e:
                        print("JSON parse error:", e)
                        return None
    return None

urls = {
    1: 'https://forms.gle/bCyynR8j6AFwSJBb9',
    2: 'https://forms.gle/Cu694ZH6GfSD4JDCA',
    3: 'https://forms.gle/Z9oeLfaJuC7tE9926',
    4: 'https://forms.gle/4K46XXh6QAz6bo9LA',
    5: 'https://forms.gle/1GYWNQSZzPuL4Qzn8',
    6: 'https://forms.gle/MppHSxcTfQ7N7iqq6'
}

for ch, url in urls.items():
    print(f"\n--- Checking Chapter {ch}: {url} ---")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req) as resp:
            final_url = resp.geturl()
            html = resp.read().decode('utf-8', errors='ignore')
        print(f"Final URL: {final_url}")
        print(f"HTML len: {len(html)}")
        data = extract_fb_data(html)
        if data:
            title = data[1][8] if len(data[1]) > 8 else "Unknown"
            print(f"Form title: {title}")
            items = data[1][1]
            print(f"Total raw items: {len(items)}")
            # Let's inspect first item
            valid_count = 0
            for it in items:
                # check if question
                if len(it) > 4 and it[4] and len(it[4]) > 0 and len(it[4][0]) > 1 and it[4][0][1]:
                    valid_count += 1
            print(f"Valid questions: {valid_count}")
        else:
            print("Failed to extract FB_PUBLIC_LOAD_DATA_")
    except Exception as e:
        print(f"Error: {e}")
