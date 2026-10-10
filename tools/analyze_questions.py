# -*- coding: utf-8 -*-
import json

with open("raw_oop_extracted.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for ch in range(1, 7):
    q_list = data[str(ch)]["questions"]
    code_count = 0
    theory_count = 0
    for q in q_list:
        text = q["question"]
        if "{" in text or "class " in text or "void " in text or "int " in text or "public " in text:
            code_count += 1
        else:
            theory_count += 1
    print(f"Chapter {ch}: total={len(q_list)}, code={code_count}, theory={theory_count}")
