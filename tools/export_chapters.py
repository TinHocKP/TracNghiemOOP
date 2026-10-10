# -*- coding: utf-8 -*-
import json
import os

with open("raw_oop_extracted.json", "r", encoding="utf-8") as f:
    data = json.load(f)

os.makedirs("chapters_txt", exist_ok=True)

for ch_id in range(1, 7):
    ch_info = data[str(ch_id)]
    filepath = f"chapters_txt/chapter_{ch_id}.txt"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(f"=== {ch_info['title']} ===\n")
        f.write(f"Tổng số câu: {len(ch_info['questions'])}\n\n")
        for idx, q in enumerate(ch_info['questions']):
            f.write(f"--- CÂU {idx+1} (ID: {q['raw_id']}) ---\n")
            f.write(f"{q['question']}\n\n")
            for o_idx, opt in enumerate(q['options']):
                f.write(f"  {chr(65+o_idx)}. {opt}\n")
            f.write("\n")
    print(f"Exported chapter_{ch_id}.txt ({len(ch_info['questions'])} câu)")
