# Figma Design Cleanup Report — Offtrail Components Page

> **File:** [Offtrail](https://www.figma.com/design/9dQKfyAgC2IP6CDIKPdeFk/Offtrail?node-id=394-9551)
> **Page:** `Components` (394:9551)
> **Annotation Category:** Brand (id: `4130:0`, color: yellow)
> **Date:** 2026-04-07

---

## API Limitation Note

**`use_figma` (Figma Plugin API) cannot read `node.annotations`.** The property throws `"get node.annotations is not yet supported"` for all node types (FRAME, COMPONENT, COMPONENT_SET, INSTANCE). The only working API is `figma.annotations.getAnnotationCategoriesAsync()` which confirms the "Brand" category exists but cannot retrieve individual annotation content. `get_design_context` surfaces annotation data but may fail if the selection is too large. All findings below are derived from component descriptions, code output, structural metadata, and visual screenshots.

---

## Summary of Cleanup Categories

| # | Category | Count | Severity |
|---|----------|-------|----------|
| 1 | Variant naming & typos | 6 | High |
| 2 | Missing interactive states | 9 | High |
| 3 | Vanity/static components needing real implementations | 4 | High |
| 4 | Description errors (copy-paste, missing) | 5 | Medium |
| 5 | Design token gaps (hardcoded values) | 3 | Medium |
| 6 | Structural housekeeping | 4 | Low |
| 7 | Code Connect gaps | 2 | Low |

---

## 1. Variant Naming & Typos

These naming issues cause broken prop mappings when translating to code.

| Component | Issue | Fix |
|-----------|-------|-----|
| **Icon** (397:10029) | Variant property is `Glpyh` (typo) — should be `Glyph` | Rename property to `Glyph` across all 9 variants |
| **Icon** — `Glpyh=out` | Inconsistent casing — all others are capitalized (`X`, `Check`, `Info`) | Rename to `Glyph=Out` |
| **Icon** — `Glpyh=question` | Same casing issue | Rename to `Glyph=Question` |
| **Brand Icon** — `Glyph=Frame 2147239245` | Auto-generated name, not a real glyph name | Rename to actual glyph (likely `Glyph=Mountain` or `Glyph=Trail` based on context) |
| **Switch Field** / **Radio** | Variant `Active3` is meaningless — no description of what this state represents | Rename to `Active=Disabled` if that's the intent, or remove |
| **Text Input** | Variant `State3` is meaningless | Rename to `State=Focused` or `State=Error` depending on visual |
| **Button** | `Colour` prop (British spelling) | Consider renaming to `Color` for consistency with CSS/code conventions |

---

## 2. Missing Interactive States

Components lack states needed for real app interactions.

| Component | Missing States | Recommendation |
|-----------|---------------|----------------|
| **Button** (2031:594) | No `disabled` state, no `loading` state | Add `State=Disabled` and optionally `State=Loading` for each Colour variant |
| **Text Input** (397:10222) | No `error` or `focused` states | Add `State=Error` (red border + message) and `State=Focused` (highlight ring) |
| **Dropdown** (4130:5933) | No `error`, `disabled`, or `open` states | Add at minimum `State=Disabled` and `State=Error` |
| **Search Input** (799:4917) | No `disabled` state | Add `State=Disabled` |
| **Checkbox** (645:574) | No `disabled` or `indeterminate` states | Add `Active=Disabled` and `Active=Indeterminate` |
| **Radio** (397:10278) | No `disabled` state (unless `Active3` is this) | Clarify or add `Active=Disabled` |
| **Switch Field** (397:10253) | No `disabled` state (unless `Active3` is this) | Clarify or add explicit `Active=Disabled` |
| **Toast** (2010:559) | No `type` variant (success/error/warning/info) | Add `Type` property with icon + color differentiation |
| **Card / Event** (424:1729) | Description mentions "activity type" variant but none exists | Add activity type property or clarify how imagery is swapped |

---

## 3. Vanity Components Needing Real Implementations

These components are designed as static visuals but need to be functional in code.

### Widget / Compass (795:2037)
- **Problem:** 72 individually rotated image tick marks rendered as separate `<img>` assets. The degree reading ("355") is a static text node.
- **Code impact:** Exports as 72+ image downloads — completely impractical.
- **Fix:** Redesign as a single component with:
  - A single SVG or canvas-rendered tick ring
  - A `heading` number prop (0-360)
  - CSS rotation for the needle/indicator
  - Remove all individual `Rotated Instance` sub-components

### Map (4143:6986) / Map Small (874:3762)
- **Problem:** Static raster map images with overlay gradients and blending modes. Not interactive.
- **Code impact:** Exports as flat images — no zoom, pan, or dynamic pin placement.
- **Fix:** Mark these as "asset-only" components and document that code should use MapBox/Google Maps with a custom style matching the dark/light theme. Keep only as a visual reference, not a buildable component.

### Your Location (871:2767)
- **Problem:** 175x175px static radial gradient circle. Description says "pulsing" but no animation exists in Figma.
- **Code impact:** Renders as a static image when it should animate.
- **Fix:** Add a note/annotation specifying the pulse animation parameters (duration, scale range, easing) so code can implement `@keyframes pulse`.

### Map Pin (871:2742)
- **Problem:** Raster asset at fixed 20x37px. Description says "Do not resize."
- **Fix:** Convert to SVG component for crisp rendering at all densities. The "do not resize" constraint should become a `size` prop locked to one value.

---

## 4. Description Errors

| Component | Issue |
|-----------|-------|
| **Dropdown** (4130:5933) | Description is copy-pasted from Text Input: "Single-line text input. Use for name, location..." — should describe dropdown-specific behavior |
| **Card / Guide** (424:1419) | No description at all |
| **Nav Tab** (4121:2264) | No description |
| **Tile / Location** (4143:7035) | No description on the component set (only on individual mode variants) |
| **Map** (4143:6986) | No description on the component set (only on individual mode variants) |

---

## 5. Design Token Gaps

Components that use hardcoded values instead of design tokens.

| Component | Hardcoded Value | Should Be |
|-----------|----------------|-----------|
| **Tile / Location (Light)** | `#5f788e` used directly for `color-alt` | Already aliased to `--otds-color-alt` but the token resolves to a raw hex — verify the token exists in the variable collection |
| **Map (Dark)** | `bg-[#615c67]` for shade gradient | Should reference a semantic token like `--otds-bg-shade` |
| **Map (Light)** | `from-[#5f788e]` gradient | Should use `--otds-color-alt` or a dedicated gradient token |
| **Tile / Location** | Inline SVG radial gradients with hardcoded rgba stops | These can't be tokenized in Figma but should be documented for code |

---

## 6. Structural Housekeeping

| Issue | Location | Fix |
|-------|----------|-----|
| **Stray instances** outside sections | 6x `Card / Guide` instances and 6x `Card / Event` instances floating at negative Y coordinates above the sections | Delete or move into a "Sandbox" section |
| **"Editor Controls (FOR MAKE)"** section | Contains `SliderRow`, `Section Accordian` [sic], `GradientBar` — these are Figma Make UI, not app components | Move to a separate page or mark as internal-only |
| **Icon split** | 16px utility icons (`Icon`) and 24px brand icons (`Brand Icon`) are separate component sets with inconsistent naming | Consider unifying under one `Icon` set with a `size` property, or at minimum align naming (`Icon/Utility` and `Icon/Brand`) |
| **Section naming** | Section is `Branding` but contains `Icon` (utility glyphs) alongside brand assets — utility icons aren't "branding" | Move `Icon` component set to a `Foundations` or new `Icons` section |

---

## 7. Code Connect Gaps

| Component | Status |
|-----------|--------|
| **Nav Tab** (4121:2264) | Missing Code Connect — `get_design_context` prompted for mapping |
| **Brand Icon** (670:1399) | Returns sparse metadata (too many variants for context window) — Code Connect exists but individual glyph mappings may be incomplete |

---

## Component Inventory with Cleanup Priority

### Priority 1 — Fix Before Building
- [ ] Rename `Glpyh` to `Glyph` on Icon component set
- [ ] Rename `Active3` / `State3` to meaningful variant names
- [ ] Fix Dropdown description (copy-paste from Text Input)
- [ ] Add missing `disabled` states to all form field components
- [ ] Rename `Glyph=Frame 2147239245` to actual icon name

### Priority 2 — Fix for Production Readiness  
- [ ] Add `error` states to Text Input and Dropdown
- [ ] Add `type` variants to Toast
- [ ] Add activity type variant to Card / Event
- [ ] Convert Map Pin from raster to SVG
- [ ] Document animation specs for Your Location pulse
- [ ] Replace hardcoded hex colors with semantic tokens in Map components

### Priority 3 — Cleanup / Organization
- [ ] Remove stray instances above sections
- [ ] Move Editor Controls to separate page
- [ ] Reorganize Icon vs Brand Icon sections
- [ ] Add missing descriptions to Card/Guide, Nav Tab, Tile/Location, Map
- [ ] Fix Code Connect for Nav Tab
- [ ] Decide on `Colour` vs `Color` naming convention for Button

---

## Design Token Reference

The file uses the `otds` (Offtrail Design System) token namespace:

**Font families:**
- `--otds-font-family-sans` → Inter
- `--otds-font-family-mono` → Geist Mono  
- `--otds-font-family-headline` → Workbench (variable font with `BLED` and `SCAN` axes)

**Color tokens:**
- `--otds-color-primary` → white (dark mode), black (light mode)
- `--otds-color-secondary` → rgba(255,255,255,0.6)
- `--otds-color-tertiary` → rgba(255,255,255,0.4)
- `--otds-color-dim` → rgba(255,255,255,0.1)
- `--otds-color-alt` → #5f788e (blue-grey)
- `--otds-bg-on-brand` → rgba(255,255,255,0.1)

**Spacing/sizing tokens:**
- `--otds-size-padding-xxsmall` (4px), `-xsmall` (4px), `-small` (12px), `-medium` (16px), `-large` (24px)
- `--otds-size-gap-xsmall` (4px), `-small` (8px)
- `--otds-size-corner-large` (12px), `-full` (999px)

**Type scale:**
- `--otds-size-font-small` (14px) → caption
- `--otds-size-font-medium` (16px) → body
- `--otds-size-font-large` (18px) → heading-2
- `--otds-size-font-xlarge` → display-medium
- `--otds-size-font-display` (40px) → display-large
- `--otds-size-font-10xlarge` (88px) → display-xxlarge
