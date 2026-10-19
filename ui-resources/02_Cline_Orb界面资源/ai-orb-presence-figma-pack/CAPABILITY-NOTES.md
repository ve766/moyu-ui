# Capability notes — Presence visual design vs current Orb

How to read:

- **Existing capability** — current renderer already expresses this language
- **Can be parameter-driven** — same shaders/profiles, new numbers or intensity curves
- **Requires Orb renderer change** — needs shader/geometry/timeline work beyond params
- **Requires new visual capability** — new layer or pass (still inside plugin, not DS v2)
- **Implemented this round (Presence field)** — DOM/CSS ambient field + light body grade, no freeze break

| State | Designed look | Capability | Shipped this round |
| --- | --- | --- | --- |
| Dormant | Quiet ember, sparse dust, almost-still arc | Existing / parameter-driven | Quiet wash + soft body grade (`presence-field`) |
| Ready | Tight core + concentric listen field + held presence | Existing (listening) + field for multi-ring listen | Listen rings + cyan wash (field) + listening profile |
| Thinking | Spiral ribbons, differential winding, soft multi-layer | Existing (thinking spin/warp/veins) | Violet wind conic (field) + thinking profile |
| Working | Directed streaks + orbit drive + mini flow signal | Mostly existing; comet trails still renderer | Fast orbit conic + energy/progress input (field + `OrbInput`) |
| Waiting | Open gate ring + pause ticks + suspended core | Was renderer gap → **field now carries gate** | Amber gate + pause ticks + held low amplitude |
| Success | Short outward pulse remnant + calm settle | Existing (success release) | Green release ring (field) + success profile |
| Failed | Contracted core + jagged veins + torn ring | Partial existing (error) → **field fracture** | Red fracture slashes + stutter wash + error profile |
| Disabled | Hollow shell, no field, no particles, dead core | Was CSS grayscale → **spent field + dim body** | Spent spokes + saturate/brightness grade, float off |

## Ready / Thinking / Working distinction (design intent)

| | Ready | Thinking | Working |
| --- | --- | --- | --- |
| Primary channel | Concentric **listen field** (external attention) | **Internal spiral** (no external focus) | **Directed orbit** (execution vectors) |
| Core | Large, stable, bright | Mid, soft, non-dominant | Bright, energy-driven (`input.energy` / `progress`) |
| Motion glyph | Even expanding rings | Dashed winding orbit | Fast conic orbit |
| Color (support only) | Cyan listen | Violet winding | Blue run |
| What you feel | “It hears me” | “It is considering” | “It is doing” |

## Most worth implementing next (recommendation)

1. **Working comet trails inside WebGL** — field orbit reads well; true streak vectors need renderer params.
2. **Success/failed timed settle in body-only freeze** — already choreographed in live session; freeze holds terminal for capture.
3. **Waiting without listen-overlay pulse** — optional polish: suppress shell pulse when presence is waiting (gate alone may be enough).
4. **Disabled orb-native spent shader** — field + CSS grade ship now; a dedicated idle “spent” profile would remove the CSS filter.

## Freeze compliance

This round **did not** modify:

- `src/shaders/*`
- `ORB_STATE_PROFILES` / `shaderProfiles.ts` numeric freezes
- `InnerSwarm` / `EnergyRings` / renderer core structure
- `plugin-sdk`, `plugin-runtime`, Plugin Architecture, main OS, P3, RunLedger, DS v2, V3

All waiting / fracture / spent language lives in `src/components/PresenceField.tsx` + `src/demo/presence-field.css` (Presence visual layer) and existing `OrbInput` / state prop driving.
