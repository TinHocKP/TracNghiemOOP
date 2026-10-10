# -*- coding: utf-8 -*-
import json
import subprocess
import os
import re

with open("raw_oop_extracted.json", "r", encoding="utf-8") as f:
    data = json.load(f)

q1 = data["5"]["questions"][0]
print("Question text:\n", q1["question"])
print("Options:", q1["options"])

# Extract code
code_match = re.search(r'(class\s+.*)', q1["question"], re.DOTALL)
if code_match:
    code = "using System;\n" + code_match.group(1).strip()
    os.makedirs("test_csharp", exist_ok=True)
    with open("test_csharp/Program.cs", "w", encoding="utf-8") as f:
        f.write(code)
    
    # We can create a simple csproj
    csproj = """<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net9.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>disable</Nullable>
  </PropertyGroup>
</Project>"""
    with open("test_csharp/test_csharp.csproj", "w", encoding="utf-8") as f:
        f.write(csproj)
    
    res = subprocess.run(
        ['dotnet', 'run', '--project', 'test_csharp'],
        capture_output=True, text=True
    )
    print("Returncode:", res.returncode)
    print("Stdout:", res.stdout)
    print("Stderr:", res.stderr)
