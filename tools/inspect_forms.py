# -*- coding: utf-8 -*-
import urllib.request
import json

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

urls = {
    1: 'https://forms.gle/bCyynR8j6AFwSJBb9',
    2: 'https://forms.gle/Cu694ZH6GfSD4JDCA',
    3: 'https://forms.gle/Z9oeLfaJuC7tE9926',
    4: 'https://forms.gle/4K46XXh6QAz6bo9LA',
    5: 'https://forms.gle/1GYWNQSZzPuL4Qzn8',
    6: 'https://forms.gle/MppHSxcTfQ7N7iqq6'
}

for ch, url in urls.items():
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
    data = extract_fb_data(html)
    items = data[1][1]
    
    print(f"\n================ CHAPTER {ch} ================")
    sample_item = None
    has_images = 0
    total_q = 0
    for it in items:
        # Check structure
        if len(it) > 4 and it[4] and len(it[4]) > 0 and len(it[4][0]) > 1 and it[4][0][1]:
            total_q += 1
            # Check for image info
            it_str = json.dumps(it, ensure_ascii=False)
            if "googleusercontent" in it_str or "lh3.google" in it_str or ".png" in it_str or ".jpg" in it_str:
                has_images += 1
            if sample_item is None:
                sample_item = it
    print(f"Total questions: {total_q}, Questions mentioning image patterns: {has_images}")
    # Inspect sample item fields
    print("Sample question title:", sample_item[1])
    print("Sample question options:", [opt[0] for opt in sample_item[4][0][1] if opt[0]])
    print("Sample item full json keys/len:", len(sample_item), [type(x).__name__ for x in sample_item])
    # Check if there is answer key in item[4][0]
    print("it[4][0] len:", len(sample_item[4][0]), "sample:", json.dumps(sample_item[4][0][:5], ensure_ascii=False))
    if len(sample_item[4][0]) > 2:
        print("it[4][0][2]:", sample_item[4][0][2])
    if len(sample_item[4][0]) > 4:
        print("it[4][0][4]:", sample_item[4][0][4])
