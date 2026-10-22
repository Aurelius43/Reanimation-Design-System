#!/usr/bin/env python3
"""Build design-system/ (the consumable package) from source/ (the mirror of Claude Design).

Run from the repo root:  python3 scripts/build_package.py
Never edit design-system/ by hand. It is deleted and rebuilt on every run.
"""
import json, os, re, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "source")
OUT = os.path.join(ROOT, "design-system")
NS = "RA"
PKG = "@aurelius43/reanimation"
GEN = re.compile(r"^<!-- @generated.*?-->\n", re.M)


def rd(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def wr(p, s):
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        f.write(s)


def fail(msg):
    print("BUILD FAILED: " + msg, file=sys.stderr)
    sys.exit(1)


for need in ["README.md", "tokens.json", "tokens.css", "design-system.json",
             "components/bundle.js", "components/bundle.css", "components/index.d.ts"]:
    if not os.path.exists(os.path.join(SRC, need)):
        fail("source/%s is missing — sync from Claude Design first (see SYNC.md)" % need)

if os.path.exists(OUT):
    shutil.rmtree(OUT)

# ---------- bundle + namespace check ----------
bundle = rd(os.path.join(SRC, "components", "bundle.js"))
m = re.match(r"/\* @ds-bundle: (\{.*?\}) \*/", bundle)
if not m:
    fail("bundle.js has no @ds-bundle header")
hdr = json.loads(m.group(1))
if hdr.get("namespace") != NS:
    fail("bundle namespace is %r, expected %r" % (hdr.get("namespace"), NS))
COMPONENTS = [c["name"] for c in hdr["components"]]

# ---------- foundations ----------
readme = rd(os.path.join(SRC, "README.md"))
readme = readme.split("\n---\n\n## Consuming this system")[0].rstrip() + "\n"
wr(os.path.join(OUT, "guidelines.md"), "# Reanimation Design System — guidelines\n\n" + readme)
for f in ["accessibility.md", "motion.md", "signature-layer.md"]:
    if os.path.exists(os.path.join(SRC, f)):
        shutil.copy(os.path.join(SRC, f), os.path.join(OUT, f))

os.makedirs(os.path.join(OUT, "tokens"), exist_ok=True)
os.makedirs(os.path.join(OUT, "components"), exist_ok=True)
shutil.copy(os.path.join(SRC, "tokens.css"), os.path.join(OUT, "tokens", "tokens.css"))
shutil.copy(os.path.join(SRC, "tokens.json"), os.path.join(OUT, "tokens", "tokens.json"))
for f in ["bundle.js", "bundle.css", "index.d.ts"]:
    shutil.copy(os.path.join(SRC, "components", f), os.path.join(OUT, "components", f))
if os.path.exists(os.path.join(SRC, "api", "tokens.md")):
    wr(os.path.join(OUT, "docs", "tokens.md"), GEN.sub("", rd(os.path.join(SRC, "api", "tokens.md"))))

# ---------- W3C DTCG tokens ----------
tj = json.loads(rd(os.path.join(SRC, "tokens.json")))
REF = re.compile(r"^\{(.+)\}$")


def dv(v):
    mm = REF.match(v) if isinstance(v, str) else None
    return "{" + mm.group(1) + "}" if mm else v


TYPES = {"color": "color", "spacing": "dimension", "radius": "dimension", "size": "dimension",
         "stroke": "dimension", "duration": "duration"}
core, dark, light = {}, {}, {}
for group in ["color", "spacing", "radius", "shadow", "size", "stroke", "duration", "platform"]:
    for t in tj.get(group, {}).get("tokens", []):
        name, val, ty = t["name"], t.get("value"), TYPES.get(group)
        desc = {"$description": t["usage"]} if t.get("usage") else {}
        if isinstance(val, dict) and ("dark" in val or "light" in val):
            for mode, bucket in (("dark", dark), ("light", light)):
                if mode in val:
                    bucket[name] = {"$value": dv(val[mode]), **({"$type": ty} if ty else {}), **desc}
        elif isinstance(val, dict):
            core[name] = {"$value": {k: dv(v) for k, v in val.items()}, **desc}
        else:
            core[name] = {"$value": dv(val), **({"$type": ty} if ty else {}), **desc}
typo = {}
for g in tj["type"]["groups"]:
    for st in g["styles"]:
        typo[st["name"]] = {"$type": "typography", "$value": {
            "fontFamily": tj["type"]["families"].get(g.get("family", "sans"), g.get("family")),
            "fontSize": st.get("fontSize"), "lineHeight": st.get("lineHeight"), "fontWeight": st.get("fontWeight"),
            **({"letterSpacing": st["letterSpacing"]} if st.get("letterSpacing") else {})},
            **({"$description": st["usage"]} if st.get("usage") else {})}
wr(os.path.join(OUT, "tokens", "tokens.dtcg.json"), json.dumps({
    "$description": "Reanimation Design System tokens in W3C Design Tokens (DTCG) format, Bone Maestro theme. Names match the CSS variables (--<name>). Bind UI to semantic or component tokens, never to core primitives.",
    "core": core, "semantic-dark": dark, "semantic-light": light, "typography": typo}, indent=2, ensure_ascii=False) + "\n")
wr(os.path.join(OUT, "tokens", "fonts.css"),
   "/* Geist, Geist Mono and Barlow Condensed from Google Fonts. Load before tokens.css. SF Pro and Roboto are platform fonts. */\n"
   "@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Geist+Mono:wght@400;500;600&family=Geist:wght@400;500;600;700;800&display=swap');\n")

# ---------- component docs ----------
dts = rd(os.path.join(SRC, "components", "index.d.ts"))
api_dir = os.path.join(SRC, "api", "components")
catalog, groups = [], {}
for n in COMPONENTS:
    card_p = os.path.join(api_dir, n + ".md")
    long_p = os.path.join(SRC, "components", n, "README.md")
    long = rd(long_p).strip() if os.path.exists(long_p) else ""
    group = None
    if os.path.exists(card_p):
        card = GEN.sub("", rd(card_p))
        card = re.sub(r"\n## More\n\nLong-form usage: .*?\n", "\n", card).rstrip()
        card = re.sub(r"\n```html\n<x-import.*?```\n", "\n", card, flags=re.S)
        summary = card.split("\n\n")[1].strip()
        gm = re.search(r"^`%s\.%s` · [0-9a-z]+ — (.+)$" % (NS, n), card, re.M)
        group = gm.group(1).strip() if gm else None
    else:
        pm = re.search(r"export (?:interface|type) %sProps\b.*?\n" % n, dts)
        summary = re.sub(r"\*\*", "", long.split("\n")[0]) if long else n
        summary = summary if len(summary) < 220 else summary[:217].rsplit(" ", 1)[0] + "…"
        card = "# %s\n\n%s\n\n`%s.%s`\n\n## Use\n\n```jsx\n<%s.%s />\n```\n\n## Props\n\n```ts\n%s```" % (
            n, summary, NS, n, NS, n, pm.group(0) if pm else "// see components/index.d.ts\n")
    if not group:
        group = {"ShowCard": "Performance"}.get(n, "iOS + iPadOS Performance" if n.startswith("IOS") else "Other")
    doc = card + ("\n\n## Guidance\n\n" + re.sub(r"^## ", "### ", long, flags=re.M) if long else "") + "\n"
    wr(os.path.join(OUT, "docs", "components", n + ".md"), doc)
    catalog.append(n)
    groups.setdefault(group, []).append((n, summary))

ORDER = ["Actions", "Inputs + Selection", "Labels + Data", "Navigation", "Feedback + Overlays", "Performance",
         "iOS + iPadOS Performance", "Signature Layer", "Patterns", "Library Workspace", "Audio Import + Validation",
         "Iconography", "Android Core"]
LAYER = {"Performance": "Performance pack", "iOS + iPadOS Performance": "Performance pack",
         "Signature Layer": "Bone Maestro theme"}
idx = ["# Component index", "",
       "%d React components on `%s` (import them from `%s`). Each links to its card: props, usage and guidance. Read the card before using a component." % (len(catalog), NS, PKG), ""]
for g in ORDER + sorted(set(groups) - set(ORDER)):
    if g not in groups:
        continue
    idx += ["## %s · %s" % (g, LAYER.get(g, "Core")), "", "| Component | What it is |", "| --- | --- |"]
    idx += ["| [`%s`](%s.md) | %s |" % (n, n, s.replace("|", "\\|")) for n, s in groups[g]]
    idx.append("")
wr(os.path.join(OUT, "docs", "components", "INDEX.md"), "\n".join(idx))

if os.path.exists(os.path.join(SRC, "api", "icons.md")):
    wr(os.path.join(OUT, "docs", "icons.md"),
       re.sub(r"\n```html\n<x-import.*?```\n", "\n", GEN.sub("", rd(os.path.join(SRC, "api", "icons.md"))), flags=re.S))

# ---------- assets ----------
adir = os.path.join(SRC, "assets")
for grp in sorted(os.listdir(adir)) if os.path.isdir(adir) else []:
    gsrc = os.path.join(adir, grp)
    if not os.path.isdir(gsrc):
        continue
    gout = os.path.join(OUT, "assets", grp)
    os.makedirs(gout, exist_ok=True)
    files = sorted(f for f in os.listdir(gsrc) if f != "README.md")
    for f in files:
        shutil.copy(os.path.join(gsrc, f), os.path.join(gout, f))
    api = os.path.join(SRC, "api", "assets", grp + ".md")
    notes = GEN.sub("", rd(api)) if os.path.exists(api) else "# Assets · %s\n" % grp
    notes = re.sub(r"\d+ files under `assets/%s/`, held in.*?approximate them\.\n" % grp,
                   "Files live in `design-system/assets/%s/`. Copy them as-is; never redraw or approximate.\n" % grp, notes, flags=re.S)
    notes = notes.split("\n## Files")[0].rstrip()
    notes = re.sub(r"<the url the asset upload returned for ([^>]+)>", r"design-system/assets/%s/\1" % grp, notes)
    notes += "\n\n## Files\n\n" + "\n".join("- `design-system/assets/%s/%s`" % (grp, f) for f in files) + "\n"
    wr(os.path.join(gout, "README.md"), notes)

# ---------- ESM entry ----------
wr(os.path.join(OUT, "components", "react-global.js"),
   "// Exposes the app's React as window.React so bundle.js can find it.\n"
   "import * as React from 'react';\n"
   "if (typeof window !== 'undefined' && !window.React) window.React = React;\n")
wr(os.path.join(OUT, "components", "index.js"),
   "// ES module entry. Import order matters: React must be on window before bundle.js runs.\n"
   "import './react-global.js';\n"
   "import './bundle.js';\n\n"
   "const %s = window.%s;\n"
   "export const { %s } = %s;\n" % (NS, NS, ", ".join(COMPONENTS), NS))

# ---------- version stamp ----------
ds = json.loads(rd(os.path.join(SRC, "design-system.json")))
lc = ds.get("lastChange", {})
wr(os.path.join(OUT, "SOURCE.json"), json.dumps({
    "title": ds.get("title"), "namespace": NS, "components": len(COMPONENTS),
    "artifact": "https://claude.ai/artifact/QCyLDQ9UgGoPDd8ikjU8EE",
    "lastChange": lc}, indent=2, ensure_ascii=False) + "\n")

print("Built design-system/: %d components, %d token sets, assets: %s" % (
    len(COMPONENTS), 4, ", ".join(sorted(os.listdir(os.path.join(OUT, "assets")))) if os.path.isdir(os.path.join(OUT, "assets")) else "none"))
