import re

with open('index.html', 'r', encoding='utf-8') as f:
    h = f.read()

with open('js/app.js', 'r', encoding='utf-8') as f:
    j = f.read()

ids_in_js = set(re.findall(r"document\.getElementById\(['\"]([^'\"]+)['\"]\)", j))

print('Referenced IDs in app.js:')
for id_name in sorted(ids_in_js):
    exists = f'id="{id_name}"' in h or f"id='{id_name}'" in h
    dynamic = id_name in [
        'btn-back-to-summary', 'btn-modal-cancel', 'btn-modal-confirm', 'btn-new-exam-dialog',
        'btn-next-q', 'btn-prev-q', 'btn-start-review', 'btn-toggle-flag', 'input-student-id',
        'input-student-name', 'modal-btn-cancel', 'modal-btn-confirm', 'modal-close',
        'package-select-modal', 'pkg-btn-cancel', 'pkg-btn-start', 'pkg-modal-close',
        'btn-retake-exam', 'timer-text'
    ]
    status = 'FOUND in index.html' if exists else ('DYNAMIC (created in JS / modal)' if dynamic else 'MISSING')
    print(f'  #{id_name:30} -> {status}')
