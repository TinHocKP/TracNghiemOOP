import json

with open('js/questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'window.DEFAULT_QUESTION_BANK = '
idx = text.find(prefix)
json_str = text[idx + len(prefix):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

data = json.loads(json_str)
print('Total questions parsed:', len(data))

from collections import Counter
counts = Counter(q['module'] for q in data)
for m in sorted(counts.keys()):
    print(f'Chương {m}: {counts[m]} câu')
