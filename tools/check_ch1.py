# -*- coding: utf-8 -*-
import urllib.request
import urllib.parse
import json
import re

url = "https://docs.google.com/forms/d/e/1FAIpQLSe6p5uPYYLjPbrA4nd2jh0HpmfJjMDWbWthHp3nW-lmpW5tLQ/formResponse"
# In Chapter 1, what are the entry ids?
# Let's check entry IDs from FB_PUBLIC_LOAD_DATA_

with open("inspect_forms.py", "r", encoding="utf-8") as f:
    pass

req = urllib.request.Request("https://docs.google.com/forms/d/e/1FAIpQLSe6p5uPYYLjPbrA4nd2jh0HpmfJjMDWbWthHp3nW-lmpW5tLQ/viewform", headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# find form action and entries
entries = re.findall(r'name="(entry\.\d+)"', html)
print("Entries in Ch1:", entries)

# Check if there is a quiz configuration in FB_PUBLIC_LOAD_DATA_
# Let's print out the full data[1] structure or parts of it
idx = html.find('FB_PUBLIC_LOAD_DATA_')
start = html.find('[', idx)
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
                data = json.loads(html[start:i+1])
                break

print("data[1][0]:", data[1][0])
print("data[1][2]:", data[1][2] if len(data[1]) > 2 else None)
print("data[1][1][0]:", json.dumps(data[1][1][0], ensure_ascii=False, indent=2))
