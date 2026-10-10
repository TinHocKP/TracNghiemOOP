# -*- coding: utf-8 -*-
import json
import random

with open("js/questions.js", "r", encoding="utf-8") as f:
    content = f.read()

start_idx = content.find("window.DEFAULT_QUESTION_BANK = ") + len("window.DEFAULT_QUESTION_BANK = ")
end_idx = content.rfind(";")
bank = json.loads(content[start_idx:end_idx].strip())

packages = {
    30: {1: 3, 2: 7, 3: 7, 4: 7, 5: 3, 6: 3},
    60: {1: 2, 2: 16, 3: 16, 4: 16, 5: 5, 6: 5},
    90: {1: 3, 2: 25, 3: 26, 4: 26, 5: 5, 6: 5}
}

for total, dist in packages.items():
    print(f"\n--- Testing Package {total} questions ---")
    sum_dist = sum(dist.values())
    assert sum_dist == total, f"Distribution sum {sum_dist} != {total}"
    
    # Simulate draw
    modules = {1: [], 2: [], 3: [], 4: [], 5: [], 6: []}
    for q in bank:
        modules[q["module"]].append(q)
        
    drawn = []
    for m in range(1, 7):
        quota = dist[m]
        pool = modules[m]
        assert len(pool) >= quota, f"Module {m} pool {len(pool)} < quota {quota}"
        picked = random.sample(pool, quota)
        drawn.extend(picked)
        print(f"  Module {m}: picked {len(picked)} / quota {quota} (Available in bank: {len(pool)})")
        
    assert len(drawn) == total, f"Drawn count {len(drawn)} != {total}"
    print(f"Package {total}: PASSED PERFECTLY!")
