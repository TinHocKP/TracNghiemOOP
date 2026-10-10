# -*- coding: utf-8 -*-
import json

with open("raw_oop_extracted.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for ch in range(1, 7):
    ch_data = data[str(ch)]
    print(f"\n==================== CHAPTER {ch}: {ch_data['title']} (Total: {len(ch_data['questions'])}) ====================")
    for i, q in enumerate(ch_data['questions'][:5]):
        print(f"\nQ{i+1}: {q['question'][:100]}...")
        for opt_idx, opt in enumerate(q['options']):
            print(f"  {chr(65+opt_idx)}. {opt}")
