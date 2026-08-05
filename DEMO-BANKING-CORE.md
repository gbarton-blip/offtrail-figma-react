# Code to Canvas Demo — BankHome, BankSettings, BankTransfer

These three screens exist **in code** and ship in the live app. Use this doc to canvas them into Figma using Code Connect — not the pre-built `.parity/` scripts.

## Before you start

1. **Dev server running:** `npm run dev`
   - BankHome → http://localhost:5174/bank
   - BankSettings → http://localhost:5174/bank/settings
   - BankTransfer → http://localhost:5174/bank/transfer
2. **Figma file open:** [Offtrail — Banking](https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking)
3. **Create an empty Figma page** named **Code to Canvas Demo** (recommended). Do not point the agent at the existing **Banking App** page — that page already has prior build frames and will confuse a clean demo.
4. **Confirm `.cursorignore`** is hiding `.parity/figma-build-*` shortcuts so the agent discovers components via Code Connect.

## What to show the audience

| Before | After |
|--------|-------|
| Three working routes in the browser | Three matching frames in Figma |
| Figma demo page empty | BankHome, BankSettings, BankTransfer built from DS instances |

**Narration:** “These screens already ship in our app. We’re going to represent them in Figma using our design system and Code Connect — code to canvas, not design-to-code.”

---

## Demo prompt — all three screens (paste into Cursor)

```markdown
## Code to Canvas — BankHome, BankSettings, BankTransfer

**Direction:** CODE → FIGMA. This is Code to Canvas, not design-to-code.

### Source of truth (read first)
| Screen | Source files | Live URL |
|--------|--------------|----------|
| BankHome | `src/BankHome.jsx`, `src/BankHome.css`, `src/data/banking.js` | http://localhost:5174/bank |
| BankSettings | `src/BankSettings.jsx`, `src/BankSettings.css`, `src/data/banking.js` | http://localhost:5174/bank/settings |
| BankTransfer | `src/BankTransfer.jsx`, `src/BankTransfer.css`, `src/data/banking.js` | http://localhost:5174/bank/transfer |

Shared layout: `src/Bank.css`, `src/components/BankTabBar.jsx`
Code Connect: `src/components/ui/**/*.figma.tsx`

### Target (create new on demo page)
- Figma file: https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking
- Page: **Code to Canvas Demo** (create if missing — must be empty)
- Frames (440px wide, stacked vertically with ~80px gap):
  1. **BankHome**
  2. **BankSettings**
  3. **BankTransfer** — recipient-selection step only (default route state)

### Hard constraints
- Build from **React source**, not from existing Figma frames.
- Do **not** call `get_design_context` on BankHome / BankSettings / BankTransfer — treat Figma as empty on the demo page.
- Resolve DS components via **Code Connect** (`*.figma.tsx`), not hardcoded node IDs from old builds.
- Do **not** read `.parity/figma-build-target-*.body.js`, `figma-helpers.js`, or `figma-image-hashes.json`.
- Use `search_design_system` + `use_figma` to place **component instances**, not hand-drawn rectangles.

### Per-screen component inventory

**BankHome** (`/bank`, tab: Home active)
- Logo, IconButton (user/neutral, 4× primary quick actions)
- TileCallout (Highlight balance + 3 stat callouts)
- Carousel + CardGuide (account cards with images from `accounts`)
- Chip filters (All active), Avatar + transaction list
- BankTabBar (NavTab × 3)

**BankSettings** (`/bank/settings`, tab: Settings active)
- PageHeader (“Settings”)
- Avatar + profile row + Button (“Edit”, transparent-white)
- SwitchField × 3 (Face ID, Push notifications, Dark mode — all on)
- TextInput × 2, Dropdown × 2 (Language, Currency)
- RadioGroup (Auto-lock, “After 1 minute” selected)
- Button × 2 footer (“Save changes” brand/large, “Sign out” transparent-black/large) — full width
- BankTabBar

**BankTransfer** (`/bank/transfer`, tab: Transfer active, **recipient step**)
- PageHeader (“Send Money”)
- SearchInput
- Avatar row (5 recent recipients)
- Contact list: Avatar + name/handle + BrandIcon arrow-right per row
- BankTabBar
- Skip BottomSheet / Toast overlay states for v1 — canvas the default list view only.

### Workflow
1. Read each JSX file — list every section, label, and data value from `banking.js`.
2. Resolve component keys from Code Connect files (PageHeader, TileCallout, Button, etc.).
3. For layout reference, optionally run `generate_figma_design` on each live URL.
4. Build **BankHome** first, then Settings, then Transfer — one frame at a time with `use_figma`.
5. Screenshot each frame and compare to the matching browser URL.

### Done when
- Three frames exist on **Code to Canvas Demo**: BankHome, BankSettings, BankTransfer.
- Each frame is 440px wide and visually matches its live URL.
- Elements are design-system **instances** (Button, TileCallout, PageHeader, etc.), not ad-hoc shapes.
```

---

## Short prompt (live demo)

```markdown
Code-to-Canvas: Build BankHome, BankSettings, and BankTransfer from code into Figma.

Read src/BankHome.jsx, src/BankSettings.jsx, src/BankTransfer.jsx (+ CSS + src/data/banking.js).
Live refs: http://localhost:5174/bank · /bank/settings · /bank/transfer

CREATE three 440px frames on a **Code to Canvas Demo** page in https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking

Use Code Connect (*.figma.tsx) + use_figma. BankTransfer = recipient step only.
Do NOT use get_design_context. Do NOT use .parity build scripts.
```

---

## One-screen prompts (build incrementally)

Use these if you want to demo one screen at a time in separate chats.

### BankHome only

```markdown
Code-to-Canvas: BankHome at http://localhost:5174/bank has no design on the demo page yet.

Read src/BankHome.jsx (+ BankHome.css, Bank.css, src/data/banking.js).
CREATE a BankHome frame (440px) on **Code to Canvas Demo** in https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking

Components: Logo, IconButton, TileCallout, Carousel, CardGuide, Chip, Avatar, BankTabBar (Home active).
Use Code Connect + use_figma. No get_design_context. No .parity scripts.
```

### BankSettings only

```markdown
Code-to-Canvas: BankSettings at http://localhost:5174/bank/settings.

Read src/BankSettings.jsx (+ BankSettings.css, Bank.css, src/data/banking.js).
CREATE a BankSettings frame (440px) on **Code to Canvas Demo** in https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking

Components: PageHeader, Avatar, Button, SwitchField, TextInput, Dropdown, RadioGroup, BankTabBar (Settings active).
Footer buttons must be full width. Use Code Connect + use_figma. No get_design_context. No .parity scripts.
```

### BankTransfer only

```markdown
Code-to-Canvas: BankTransfer at http://localhost:5174/bank/transfer (recipient step).

Read src/BankTransfer.jsx (+ BankTransfer.css, Bank.css, src/data/banking.js).
CREATE a BankTransfer frame (440px) on **Code to Canvas Demo** in https://www.figma.com/design/PSVZBAMK08FWIqvchjq7ml/Offtrail--Banking

Components: PageHeader, SearchInput, Avatar, BrandIcon, BankTabBar (Transfer active).
Canvas the default recipient list — skip BottomSheet/Toast overlays for now.
Use Code Connect + use_figma. No get_design_context. No .parity scripts.
```

---

## Screen inventories (for verification)

### BankHome

| Section | Content |
|---------|---------|
| Top bar | Logo + IconButton (user) |
| Balance | Eyebrow “Good afternoon, {name}” · Highlight TileCallout “TOTAL BALANCE” · 3 stat callouts |
| Quick actions | Send, Request, Save, More (IconButton primary + labels) |
| Accounts | Carousel “Accounts” / “Manage” · CardGuide per account |
| Activity | “Recent activity” · Chips All/Income/Spending/Transfers · 6 transaction rows |
| Nav | BankTabBar, Home active |

### BankSettings

| Section | Content |
|---------|---------|
| Header | PageHeader “Settings” |
| Profile | Avatar 56px · name · email · Edit button |
| Preferences | Face ID, Push notifications, Dark mode switches |
| Account | Contact email, Phone, Language dropdown, Currency dropdown |
| Security | Auto-lock RadioGroup (3 options) |
| Footer | Save changes (brand) · Sign out (transparent-black) |
| Nav | BankTabBar, Settings active |

### BankTransfer (recipient step)

| Section | Content |
|---------|---------|
| Header | PageHeader “Send Money” |
| Search | SearchInput “Search people or @handle” |
| Recent | 5 Avatar buttons |
| Contacts | Full recipient list with Avatar, name, @handle, arrow-right |
| Nav | BankTabBar, Transfer active |

---

## Components without Code Connect (expect manual assembly)

These are used in the banking screens but have no `*.figma.tsx` mapping yet. The agent should still match them visually using `search_design_system` or compose from primitives:

| Component | Used in |
|-----------|---------|
| Carousel | BankHome |
| BankTabBar | All three (wraps NavTab — NavTab **does** have Code Connect) |
| RadioGroup | BankSettings |

---

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| Agent calls `get_design_context` | Existing frames on Banking App page | Use empty **Code to Canvas Demo** page; say “does NOT exist on demo page” |
| Agent reads `.parity/` scripts | Shortcuts visible | Check `.cursorignore` |
| Agent builds Transfer amount step | Multi-step flow | Specify “recipient step only” / default URL |
| Agent skips BankHome account images | CardGuide needs images | Point at `accounts[].src` in `banking.js`; use `upload_assets` if needed |
| Settings footer buttons narrow | Layout not full-width | Re-paste BankSettings prompt; note “footer buttons full width” |
| `/bank` 404 | Dev server stale | Restart `npm run dev` |

---

## Optional: parity check after canvas

If you want to measure how close the canvas got, you can point `.parity/config.json` at the new demo-page node IDs and run parity gates — but **do that after the demo**, not during it. The demo should not depend on `.parity/` scripts.
