# AI Employee Orb — Presence Visual Design (Figma import pack)

**No plugin / SDK / Runtime / DS v2 code was modified.** This folder is a standalone visual exploration pack.

## Where to put it in Figma

1. Create a new Figma file (suggested name: `AI Orb — Presence Visual Design`).
2. Create 4 pages (or top-level frames):
   - **A · 8 States Overview**
   - **B · Ready / Wake**
   - **C · Runtime Journey**
   - **D · Visual Anatomy**
3. Drag each SVG from `frames/` onto the matching page (Figma imports SVG as a layer tree).
4. Optionally drag `orbs/*.svg` into a **Components / Orbs** page and mark each orb root as a component.

| Frame | File |
| --- | --- |
| A | `frames/A-8-states-overview.svg` |
| B | `frames/B-ready-wake.svg` |
| C | `frames/C-runtime-journey.svg` |
| D | `frames/D-visual-anatomy.svg` |

Individual state stacks (best for inspecting layers): `orbs/1-dormant.svg` … `orbs/8-disabled.svg`.

## Layer naming (matches Frame D)

Each orb imports as groups:

1. `01-outer-field`
2. `02-glow`
3. `03-particle-layer`
4. `04-motion-direction`
5. `05-inner-energy`
6. `06-core`
7. `07-glass-shell`
8. `08-state-signal`

## Acceptance ritual (your bar)

Open Frame A → hide/reduce opacity of all `*-label` groups → judge **only the orb bodies**.

## Design sources (read-only references)

- `F:\Cline\ai-orb-plugin` (motion languages breathe/gather/wind/release) — not modified
- DS v2 visual language / state colors (read-only) — not modified
