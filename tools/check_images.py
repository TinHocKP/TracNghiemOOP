# -*- coding: utf-8 -*-
import json

with open("raw_oop_extracted.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for ch in range(1, 7):
    ch_data = data[str(ch)]
    img_count = 0
    for q in ch_data["questions"]:
        # check raw_item
        raw_str = json.dumps(q, ensure_ascii=False)
        if "googleusercontent.com" in raw_str or "drive.google.com" in raw_str or ".png" in raw_str or ".jpg" in raw_str:
            img_count += 1
    print(f"Chapter {ch}: {img_count} images found")
