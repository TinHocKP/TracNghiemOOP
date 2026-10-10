import re

with open('practice.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('js/practice.js', 'r', encoding='utf-8') as f:
    js = f.read()

ids_in_js = set(re.findall(r"document\.getElementById\(['\"]([^'\"]+)['\"]\)", js))

print('Referenced IDs in practice.js:')
all_ok = True
for id_name in sorted(ids_in_js):
    exists = f'id="{id_name}"' in html or f"id='{id_name}'" in html
    dynamic = id_name in ['chapter-result-modal', 'check-show-all-answers']
    status = 'FOUND in HTML' if exists else ('DYNAMIC (Created in JS)' if dynamic else 'MISSING!')
    print(f'  #{id_name:30} -> {status}')
    if status == 'MISSING!':
        all_ok = False

print('\nAll DOM IDs accounted for:', all_ok)
