# Code to Canvas Demo — BankStatements

This screen exists **in code only**. There is no `BankStatements` frame in Figma yet. Use this doc to run the demo.

## Before you start

1. **Dev server running:** `npm run dev` → http://localhost:5174/bank/statements
2. **Figma file open:** [Offtrail — Banking](https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking)
3. **Create an empty Figma page** named **Code to Canvas Demo** (or confirm it is empty). Do not use the page that already has BankHome / BankSettings / BankTransfer.
4. **Optional:** Confirm `.cursorignore` is hiding the banking build shortcuts so the agent discovers components via Code Connect instead of reusing pre-written scripts.

## What to show the audience

| Before | After |
|--------|-------|
| Browser at `/bank/statements` — working screen | Same screen, now represented in Figma |
| Figma page empty — no Statements design | New `BankStatements` frame built from DS components |

**Narration:** “This screen shipped in code. It was never designed in Figma. We’re going to canvas it using our design system and Code Connect.”

## Demo prompt (paste into Cursor)

```markdown
## Code to Canvas — BankStatements

**Direction:** CODE → FIGMA. This is Code to Canvas, not design-to-code.

### Source of truth (read first)
- `src/BankStatements.jsx` (+ `src/BankStatements.css`, `src/data/banking.js`)
- Live app: http://localhost:5174/bank/statements
- Shared layout: `src/Bank.css`, `src/components/BankTabBar.jsx`
- Code Connect: `src/components/ui/**/*.figma.tsx`

### Target (create new — does not exist yet)
- Figma file: https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking
- Page: **Code to Canvas Demo** (create if missing)
- Frame name: **BankStatements**
- Frame width: **440px**

### Hard constraints
- **BankStatements does NOT exist in Figma.** Do not call `get_design_context` or search Figma for an existing Statements design.
- Build from the **React source** using `use_figma` + `figma-generate-design`.
- Resolve DS components via **Code Connect** (`*.figma.tsx`), not hardcoded node IDs.
- Do **not** read `.parity/figma-build-target-*.body.js`, `figma-helpers.js`, or `figma-image-hashes.json`.

### Components this screen uses
PageHeader, Dropdown, Chip, TileCallout (Highlight + Subtle), Button (brand/large), BrandIcon (arrow-right), BankTabBar (Home active).

### Workflow
1. Read `BankStatements.jsx` — list every section and text value.
2. Resolve component keys from Code Connect files.
3. Optionally run `generate_figma_design` on the live URL for layout reference.
4. Assemble the frame in Figma with `use_figma`, section by section.
5. Screenshot the frame and compare to the browser.

### Done when
- A new **BankStatements** frame exists on the demo page.
- It visually matches http://localhost:5174/bank/statements.
- Elements are design-system **instances**, not hand-drawn boxes.
```

## Short prompt (live demo)

```markdown
Code-to-Canvas: BankStatements exists at http://localhost:5174/bank/statements but has NO Figma design.

Read src/BankStatements.jsx as source of truth. Use Code Connect + use_figma to CREATE a new BankStatements frame (440px) on a **Code to Canvas Demo** page in https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking

Do NOT use get_design_context — there is nothing to fetch. Do NOT use .parity build scripts.
```

## Screen inventory (for verification)

| Section | Content |
|---------|---------|
| Header | PageHeader — “Statements” |
| Filters | Dropdown “Account” + Chips 2026 / 2025 / All |
| Summary | TileCallout Highlight “LATEST STATEMENT” + two Subtle stats |
| List | 6 monthly statement rows with period, account, dates, balance, PDF |
| Action | Button “Download all” (brand, large) |
| Nav | BankTabBar, Home active |

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| Agent calls `get_design_context` | Prompt implied Figma source | Re-paste prompt; emphasize “does NOT exist in Figma” |
| Agent searches Figma for BankStatements | Old prompt / wrong page URL | Use empty **Code to Canvas Demo** page |
| Agent reads `.parity/` scripts | Shortcuts not ignored | Check `.cursorignore` |
| `/bank/statements` 404 | Dev server stale | Restart `npm run dev` |
```
