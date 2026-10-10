# -*- coding: utf-8 -*-
import json

with open("ch5_run_results.json", "r", encoding="utf-8") as f:
    results = json.load(f)

for r in results:
    if r.get("matched") is None:
        q_num = r["q_num"]
        print(f"\n--- Ch5 Q{q_num} (Stdout: {r.get('stdout')}) ---")
        print("Text:", r.get("text")[:150].replace('\n', ' '))
        for idx, opt in enumerate(r.get("opts", [])):
            print(f"  {chr(65+idx)}. {opt}")
