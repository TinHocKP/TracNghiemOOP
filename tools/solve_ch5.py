# -*- coding: utf-8 -*-
import json
import subprocess
import os
import re

with open("raw_oop_extracted.json", "r", encoding="utf-8") as f:
    data = json.load(f)

q_list = data["5"]["questions"]
print(f"Total questions in Ch5: {len(q_list)}")

os.makedirs("test_csharp_ch5", exist_ok=True)
csproj = """<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net9.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>disable</Nullable>
  </PropertyGroup>
</Project>"""
with open("test_csharp_ch5/test_csharp_ch5.csproj", "w", encoding="utf-8") as f:
    f.write(csproj)

results = []

for idx, q in enumerate(q_list):
    text = q["question"]
    opts = q["options"]
    
    code_match = re.search(r'((class|interface|abstract\s+class)\s+.*)', text, re.DOTALL)
    if not code_match:
        results.append({"q_num": idx+1, "matched": None, "type": "THEORY", "text": text, "opts": opts})
        continue
        
    raw_code = code_match.group(1).strip()
    full_code = "using System;\nusing System.Collections.Generic;\n" + raw_code
    
    with open("test_csharp_ch5/Program.cs", "w", encoding="utf-8") as f:
        f.write(full_code)
        
    # Build first
    res_b = subprocess.run(
        ['dotnet', 'build', 'test_csharp_ch5', '-v', 'q', '--nologo'],
        capture_output=True, text=True, timeout=10
    )
    
    if res_b.returncode != 0:
        stdout = "COMPILE_ERROR"
    else:
        try:
            res_r = subprocess.run(
                ['dotnet', 'run', '--project', 'test_csharp_ch5', '--no-build'],
                capture_output=True, text=True, timeout=5
            )
            if res_r.returncode != 0:
                stdout = "RUNTIME_ERROR"
            else:
                stdout = res_r.stdout.strip()
        except subprocess.TimeoutExpired:
            stdout = "RUNTIME_TIMEOUT"
            
    matched_opt = None
    for opt_i, opt in enumerate(opts):
        clean_opt = opt.strip()
        if stdout == "COMPILE_ERROR" and ("lỗi biên dịch" in clean_opt.lower() or "compile" in clean_opt.lower()):
            matched_opt = opt_i
            break
        elif stdout == "RUNTIME_ERROR" and ("lỗi thực thi" in clean_opt.lower() or "runtime" in clean_opt.lower() or "exception" in clean_opt.lower()):
            matched_opt = opt_i
            break
        elif stdout and (stdout == clean_opt or clean_opt.startswith(stdout) or stdout.startswith(clean_opt)):
            matched_opt = opt_i
            break
            
    print(f"Ch5 Q{idx+1}: Output='{stdout[:40]}' -> Matched: {matched_opt}")
    results.append({
        "q_num": idx+1,
        "matched": matched_opt,
        "stdout": stdout,
        "opts": opts,
        "text": text
    })

with open("ch5_run_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Saved ch5_run_results.json!")
