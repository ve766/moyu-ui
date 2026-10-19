/**
 * AI Employee Orb — Presence Visual Design pack generator.
 * Emits Figma-importable SVGs (named <g id> layers). No plugin code touched.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = 'F:/Cline/ai-orb-presence-figma-pack'
const FRAMES = join(ROOT, 'frames')
const ORBS = join(ROOT, 'orbs')

mkdirSync(FRAMES, { recursive: true })
mkdirSync(ORBS, { recursive: true })

/** @typedef {'dormant'|'ready'|'thinking'|'working'|'waiting'|'success'|'failed'|'disabled'} Presence */

/** DS-aligned presence palette (visual language only; not a code contract). */
const PALETTE = {
  dormant: {
    primary: '#7f9fb8',
    accent: '#cfe9ff',
    deep: '#1a2430',
    glow: '#5a7f9a',
    label: 'Dormant',
    energy: 'quiet breath',
    motion: 'breathe 5.2s · near-still orbit',
    signal: 'low ember core + sparse dust',
  },
  ready: {
    primary: '#6ee7ff',
    accent: '#e0f7ff',
    deep: '#0d2a38',
    glow: '#38bdf8',
    label: 'Ready',
    energy: 'gathered listening',
    motion: 'stable presence · soft radial listen',
    signal: 'concentric listen field + tight core',
  },
  thinking: {
    primary: '#8b7cf6',
    accent: '#ddd2ff',
    deep: '#1a1430',
    glow: '#a78bfa',
    label: 'Thinking',
    energy: 'winding interior',
    motion: 'differential spin · soft uncertainty',
    signal: 'spiral ribbons, no single focus',
  },
  working: {
    primary: '#60a5fa',
    accent: '#dbeafe',
    deep: '#0c1e3a',
    glow: '#3b82f6',
    label: 'Working',
    energy: 'directed flow',
    motion: 'comet trails · orbit drive',
    signal: 'streaked vectors around core',
  },
  waiting: {
    primary: '#fb923c',
    accent: '#ffedd5',
    deep: '#2a1608',
    glow: '#f97316',
    label: 'Waiting',
    energy: 'held suspend',
    motion: 'paused orbit · open gap',
    signal: 'broken ring gate + suspended core',
  },
  success: {
    primary: '#34d399',
    accent: '#d1fae5',
    deep: '#06281c',
    glow: '#10b981',
    label: 'Success',
    energy: 'short release',
    motion: 'outward pulse → settle',
    signal: 'expanding wave remnant + calm core',
  },
  failed: {
    primary: '#f87171',
    accent: '#ffe4e6',
    deep: '#2a0d10',
    glow: '#ef4444',
    label: 'Failed',
    energy: 'interruption',
    motion: 'contract · fracture · damp',
    signal: 'shrunk core + jagged veins + torn ring',
  },
  disabled: {
    primary: '#5b5b66',
    accent: '#a1a1aa',
    deep: '#121216',
    glow: '#3f3f46',
    label: 'Disabled',
    energy: 'spent',
    motion: 'no energy · shell only',
    signal: 'hollow core, no particles, no field',
  },
}

const ORDER = /** @type {Presence[]} */ ([
  'dormant',
  'ready',
  'thinking',
  'working',
  'waiting',
  'success',
  'failed',
  'disabled',
])

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function polar(cx, cy, r, deg) {
  const rad = ((deg - 90) * Math.PI) / 180
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)]
}

function arcPath(cx, cy, r, startDeg, endDeg) {
  const [x1, y1] = polar(cx, cy, r, startDeg)
  const [x2, y2] = polar(cx, cy, r, endDeg)
  const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0
  const sweep = endDeg > startDeg ? 1 : 0
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${large} ${sweep} ${x2.toFixed(2)} ${y2.toFixed(2)}`
}

function ribbon(cx, cy, r0, r1, a0, a1) {
  const [x1, y1] = polar(cx, cy, r0, a0)
  const [x2, y2] = polar(cx, cy, r1, a1)
  const [x3, y3] = polar(cx, cy, r1 * 0.92, a1 - 28)
  const [x4, y4] = polar(cx, cy, r0 * 1.08, a0 + 28)
  return `M ${x1} ${y1} Q ${x4} ${y4} ${x2} ${y2} L ${x3} ${y3} Q ${(x1 + x3) / 2} ${(y1 + y3) / 2} ${x1} ${y1} Z`
}

function particleRing(cx, cy, r, count, size, color, opacity, seed = 1, arcSpan = 360, arcStart = 0) {
  let out = ''
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0 : i / count
    const ang = arcStart + t * arcSpan + ((i * seed * 17) % 11) * 0.7
    const rr = r + (((i * seed * 13) % 7) - 3) * (size * 0.35)
    const [x, y] = polar(cx, cy, rr, ang)
    const s = size * (0.55 + ((i * 7) % 5) * 0.12)
    const o = opacity * (0.55 + ((i * 3) % 4) * 0.12)
    out += `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${s.toFixed(2)}" fill="${color}" opacity="${Math.min(1, o).toFixed(3)}"/>`
  }
  return out
}

function streaks(cx, cy, r, count, color, opacity) {
  let out = ''
  for (let i = 0; i < count; i++) {
    const a = (i * 360) / count + 12
    const r0 = r * 0.55
    const r1 = r * (0.88 + (i % 3) * 0.05)
    const [x1, y1] = polar(cx, cy, r0, a)
    const [x2, y2] = polar(cx, cy, r1, a + 14)
    out += `<path d="M ${x1.toFixed(2)} ${y1.toFixed(2)} Q ${((x1 + x2) / 2 + 6).toFixed(2)} ${((y1 + y2) / 2).toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}" stroke="${color}" stroke-width="${(2.2 + (i % 3) * 0.6).toFixed(1)}" stroke-linecap="round" fill="none" opacity="${(opacity * (0.6 + (i % 4) * 0.1)).toFixed(2)}"/>`
  }
  return out
}

function veins(cx, cy, r, color, opacity) {
  let out = ''
  for (let i = 0; i < 9; i++) {
    const a = i * 40 + 7
    const mid = r * (0.45 + (i % 3) * 0.08)
    const end = r * (0.82 + (i % 2) * 0.1)
    const [x0, y0] = polar(cx, cy, r * 0.18, a)
    const [xm, ym] = polar(cx, cy, mid, a + 18)
    const [xe, ye] = polar(cx, cy, end, a - 10)
    const jag = i % 2 === 0 ? 8 : -6
    out += `<path d="M ${x0.toFixed(1)} ${y0.toFixed(1)} L ${(xm + jag).toFixed(1)} ${ym.toFixed(1)} L ${xe.toFixed(1)} ${ye.toFixed(1)}" stroke="${color}" stroke-width="${1.4 + (i % 3) * 0.4}" fill="none" opacity="${opacity}" stroke-linecap="round" stroke-linejoin="round"/>`
  }
  return out
}

function spiralRibbons(cx, cy, r, colorA, colorB) {
  let out = ''
  for (let arm = 0; arm < 3; arm++) {
    let d = ''
    for (let s = 0; s <= 18; s++) {
      const t = s / 18
      const ang = arm * 120 + t * 220
      const rr = r * (0.22 + t * 0.62)
      const [x, y] = polar(cx, cy, rr, ang)
      d += (s === 0 ? 'M ' : ' L ') + x.toFixed(2) + ' ' + y.toFixed(2)
    }
    out += `<path d="${d}" stroke="${arm % 2 ? colorB : colorA}" stroke-width="${5 - arm * 0.4}" fill="none" opacity="${0.55 - arm * 0.08}" stroke-linecap="round"/>`
  }
  return out
}

function concentricListen(cx, cy, color) {
  return [
    `<circle cx="${cx}" cy="${cy}" r="108" fill="none" stroke="${color}" stroke-width="1.2" opacity="0.22"/>`,
    `<circle cx="${cx}" cy="${cy}" r="124" fill="none" stroke="${color}" stroke-width="1" opacity="0.14" stroke-dasharray="4 10"/>`,
    `<circle cx="${cx}" cy="${cy}" r="140" fill="none" stroke="${color}" stroke-width="0.8" opacity="0.08"/>`,
  ].join('')
}

function shockRing(cx, cy, r, color, opacity, dash = '') {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="3" opacity="${opacity}" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`
}

function tornRing(cx, cy, r, color) {
  return [
    `<path d="${arcPath(cx, cy, r, -40, 70)}" fill="none" stroke="${color}" stroke-width="3.5" opacity="0.75" stroke-linecap="round"/>`,
    `<path d="${arcPath(cx, cy, r, 110, 190)}" fill="none" stroke="${color}" stroke-width="3.5" opacity="0.75" stroke-linecap="round"/>`,
    `<path d="${arcPath(cx, cy, r, 230, 300)}" fill="none" stroke="${color}" stroke-width="3.5" opacity="0.75" stroke-linecap="round"/>`,
    `<path d="${arcPath(cx, cy, r + 10, 20, 55)}" fill="none" stroke="${color}" stroke-width="2" opacity="0.45" stroke-dasharray="3 6"/>`,
  ].join('')
}

function openGateRing(cx, cy, r, color) {
  // Waiting: ring with a deliberate open gate (external condition missing).
  return [
    `<path d="${arcPath(cx, cy, r, 25, 335)}" fill="none" stroke="${color}" stroke-width="4" opacity="0.7" stroke-linecap="round"/>`,
    `<path d="${arcPath(cx, cy, r + 14, 40, 90)}" fill="none" stroke="${color}" stroke-width="2" opacity="0.35" stroke-linecap="round"/>`,
    `<path d="${arcPath(cx, cy, r + 14, 110, 160)}" fill="none" stroke="${color}" stroke-width="2" opacity="0.35" stroke-linecap="round"/>`,
    `<circle cx="${cx}" cy="${cy - r - 22}" r="3" fill="${color}" opacity="0.9"/>`,
    `<circle cx="${cx}" cy="${cy + r + 22}" r="3" fill="${color}" opacity="0.9"/>`,
  ].join('')
}

/**
 * Build one presence orb as Figma-layered SVG content (no root svg).
 * Origin is top-left of a size×size box; center at size/2.
 * @param {Presence} state
 * @param {number} size
 * @param {string} idPrefix unique id prefix (Figma layer names)
 */
function orbContent(state, size, idPrefix) {
  const p = PALETTE[state]
  const c = size / 2
  const R = size * 0.34
  const id = (n) => `${idPrefix}-${n}`
  const disabled = state === 'disabled'

  // Layer stack (bottom → top) — names map 1:1 to Figma groups.
  const layers = []

  // 01 Outer Field — ambient aura / presence volume
  if (!disabled) {
    const fieldR = state === 'ready' ? size * 0.46 : state === 'success' ? size * 0.48 : size * 0.42
    const fieldOp = { dormant: 0.35, ready: 0.7, thinking: 0.55, working: 0.6, waiting: 0.45, success: 0.75, failed: 0.4, disabled: 0 }[state]
    layers.push(
      `<g id="${id('01-outer-field')}">` +
        `<defs>` +
        `<radialGradient id="${id('field')}" cx="50%" cy="50%" r="50%">` +
        `<stop offset="0%" stop-color="${p.glow}" stop-opacity="${0.55 * fieldOp}"/>` +
        `<stop offset="45%" stop-color="${p.primary}" stop-opacity="${0.22 * fieldOp}"/>` +
        `<stop offset="100%" stop-color="${p.deep}" stop-opacity="0"/>` +
        `</radialGradient>` +
        `</defs>` +
        `<circle cx="${c}" cy="${c}" r="${fieldR}" fill="url(#${id('field')})"/>` +
        `</g>`,
    )
  } else {
    layers.push(
      `<g id="${id('01-outer-field')}">` +
        `<circle cx="${c}" cy="${c}" r="${size * 0.4}" fill="#121216" opacity="0.55"/>` +
        `<circle cx="${c}" cy="${c}" r="${size * 0.4}" fill="none" stroke="#3f3f46" stroke-width="1" opacity="0.35"/>` +
        `</g>`,
    )
  }

  // 02 Glow — tighter hot halo under the body
  if (!disabled) {
    const glowOp = { dormant: 0.35, ready: 0.85, thinking: 0.6, working: 0.7, waiting: 0.5, success: 0.9, failed: 0.35 }[state] ?? 0
    layers.push(
      `<g id="${id('02-glow')}">` +
        `<defs>` +
        `<radialGradient id="${id('glow')}" cx="50%" cy="50%" r="50%">` +
        `<stop offset="55%" stop-color="${p.accent}" stop-opacity="${0.05 * glowOp}"/>` +
        `<stop offset="78%" stop-color="${p.primary}" stop-opacity="${0.35 * glowOp}"/>` +
        `<stop offset="100%" stop-color="${p.glow}" stop-opacity="0"/>` +
        `</radialGradient>` +
        `</defs>` +
        `<circle cx="${c}" cy="${c}" r="${R * 1.45}" fill="url(#${id('glow')})"/>` +
        `</g>`,
    )
  } else {
    layers.push(`<g id="${id('02-glow')}"><circle cx="${c}" cy="${c}" r="${R * 1.2}" fill="none" stroke="#2a2a32" stroke-width="6" opacity="0.35"/></g>`)
  }

  // 03 Particle Layer
  const particleLayer = [`<g id="${id('03-particle-layer')}">`]
  if (disabled) {
    particleLayer.push(`<circle cx="${c}" cy="${c}" r="${R * 1.15}" fill="none" stroke="#3f3f46" stroke-width="1" stroke-dasharray="2 8" opacity="0.4"/>`)
  } else if (state === 'dormant') {
    particleLayer.push(particleRing(c, c, R * 1.15, 10, 1.6, p.accent, 0.35, 3))
  } else if (state === 'ready') {
    particleLayer.push(particleRing(c, c, R * 0.78, 16, 2.0, p.accent, 0.55, 5))
    particleLayer.push(particleRing(c, c, R * 1.05, 12, 1.5, p.primary, 0.35, 2))
  } else if (state === 'thinking') {
    particleLayer.push(particleRing(c, c, R * 0.95, 18, 1.8, p.accent, 0.5, 7))
    particleLayer.push(particleRing(c, c, R * 1.2, 10, 1.4, p.primary, 0.3, 4))
  } else if (state === 'working') {
    particleLayer.push(particleRing(c, c, R * 1.05, 14, 2.1, p.accent, 0.55, 9))
    particleLayer.push(streaks(c, c, R * 1.25, 7, p.primary, 0.55))
  } else if (state === 'waiting') {
    particleLayer.push(particleRing(c, c, R * 1.0, 8, 1.7, p.accent, 0.4, 6, 300, 30))
    // Frozen “held” particles in the gate gap
    particleLayer.push(particleRing(c, c, R * 1.0, 3, 2.4, p.primary, 0.7, 1, 40, 210))
  } else if (state === 'success') {
    particleLayer.push(particleRing(c, c, R * 1.35, 16, 1.8, p.accent, 0.5, 8))
    particleLayer.push(particleRing(c, c, R * 0.7, 8, 2.2, p.primary, 0.55, 3))
  } else if (state === 'failed') {
    particleLayer.push(particleRing(c, c, R * 1.1, 12, 1.5, p.accent, 0.35, 11))
    particleLayer.push(particleRing(c, c, R * 0.7, 6, 2.0, p.primary, 0.4, 5))
  }
  particleLayer.push(`</g>`)
  layers.push(particleLayer.join(''))

  // 04 Motion Direction — state-specific directional language
  const motion = [`<g id="${id('04-motion-direction')}">`]
  if (state === 'dormant') {
    motion.push(`<path d="${arcPath(c, c, R * 1.35, -15, 35)}" fill="none" stroke="${p.primary}" stroke-width="2" opacity="0.25" stroke-linecap="round"/>`)
    motion.push(`<path d="${arcPath(c, c, R * 1.35, 165, 205)}" fill="none" stroke="${p.primary}" stroke-width="2" opacity="0.2" stroke-linecap="round"/>`)
  } else if (state === 'ready') {
    motion.push(concentricListen(c, c, p.primary))
    motion.push(`<path d="${arcPath(c, c, R * 1.4, -70, -10)}" fill="none" stroke="${p.accent}" stroke-width="2.5" opacity="0.45" stroke-linecap="round"/>`)
    motion.push(`<path d="${arcPath(c, c, R * 1.4, 110, 170)}" fill="none" stroke="${p.accent}" stroke-width="2.5" opacity="0.45" stroke-linecap="round"/>`)
  } else if (state === 'thinking') {
    motion.push(`<path d="${arcPath(c, c, R * 1.3, -40, 80)}" fill="none" stroke="${p.primary}" stroke-width="3" opacity="0.4" stroke-linecap="round" stroke-dasharray="18 12"/>`)
    motion.push(`<path d="${arcPath(c, c, R * 1.3, 140, 250)}" fill="none" stroke="${p.accent}" stroke-width="2.5" opacity="0.35" stroke-linecap="round" stroke-dasharray="12 16"/>`)
  } else if (state === 'working') {
    motion.push(`<path d="${arcPath(c, c, R * 1.32, -55, 45)}" fill="none" stroke="${p.primary}" stroke-width="4" opacity="0.55" stroke-linecap="round"/>`)
    motion.push(`<path d="${arcPath(c, c, R * 1.42, 50, 100)}" fill="none" stroke="${p.accent}" stroke-width="2.5" opacity="0.4" stroke-linecap="round"/>`)
    motion.push(`<path d="${arcPath(c, c, R * 1.32, 125, 215)}" fill="none" stroke="${p.primary}" stroke-width="3.5" opacity="0.5" stroke-linecap="round"/>`)
    // motion chevrons
    const [ax, ay] = polar(c, c, R * 1.5, 20)
    motion.push(`<path d="M ${ax} ${ay} l 8 -4 l 0 8 z" fill="${p.accent}" opacity="0.7"/>`)
  } else if (state === 'waiting') {
    motion.push(openGateRing(c, c, R * 1.28, p.primary))
    motion.push(`<line x1="${c - 18}" y1="${c - R * 1.55}" x2="${c - 8}" y2="${c - R * 1.55}" stroke="${p.primary}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>`)
    motion.push(`<line x1="${c + 8}" y1="${c - R * 1.55}" x2="${c + 18}" y2="${c - R * 1.55}" stroke="${p.primary}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>`)
  } else if (state === 'success') {
    motion.push(shockRing(c, c, R * 1.45, p.primary, 0.35, '2 14'))
    motion.push(shockRing(c, c, R * 1.2, p.glow, 0.55))
    motion.push(shockRing(c, c, R * 0.95, p.accent, 0.3))
  } else if (state === 'failed') {
    motion.push(tornRing(c, c, R * 1.3, p.primary))
    motion.push(`<path d="${arcPath(c, c, R * 1.5, -20, 50)}" fill="none" stroke="${p.glow}" stroke-width="2" opacity="0.35" stroke-dasharray="4 8"/>`)
  } else if (state === 'disabled') {
    motion.push(`<circle cx="${c}" cy="${c}" r="${R * 1.3}" fill="none" stroke="#2f2f38" stroke-width="2" stroke-dasharray="1 10" opacity="0.5"/>`)
  }
  motion.push(`</g>`)
  layers.push(motion.join(''))

  // 05 Inner Energy — body volume
  const energy = [`<g id="${id('05-inner-energy')}">`]
  energy.push(
    `<defs>` +
      `<radialGradient id="${id('body')}" cx="42%" cy="38%" r="62%">` +
      `<stop offset="0%" stop-color="${p.accent}" stop-opacity="${disabled ? 0.15 : 0.95}"/>` +
      `<stop offset="38%" stop-color="${p.primary}" stop-opacity="${disabled ? 0.35 : 0.85}"/>` +
      `<stop offset="78%" stop-color="${p.deep}" stop-opacity="0.95"/>` +
      `<stop offset="100%" stop-color="#000000" stop-opacity="0.9"/>` +
      `</radialGradient>` +
      `<radialGradient id="${id('rim')}" cx="50%" cy="50%" r="50%">` +
      `<stop offset="70%" stop-color="${p.accent}" stop-opacity="0"/>` +
      `<stop offset="92%" stop-color="${p.accent}" stop-opacity="${disabled ? 0.25 : 0.7}"/>` +
      `<stop offset="100%" stop-color="${p.glow}" stop-opacity="${disabled ? 0.15 : 0.55}"/>` +
      `</radialGradient>` +
      `</defs>` +
      `<circle cx="${c}" cy="${c}" r="${R}" fill="url(#${id('body')})"/>` +
      `<circle cx="${c}" cy="${c}" r="${R}" fill="url(#${id('rim')})"/>`,
  )

  if (state === 'thinking') {
    energy.push(spiralRibbons(c, c, R * 0.92, p.accent, p.primary))
    energy.push(`<circle cx="${c}" cy="${c}" r="${R * 0.55}" fill="none" stroke="${p.accent}" stroke-width="8" opacity="0.12"/>`)
  } else if (state === 'working') {
    energy.push(streaks(c, c, R * 0.85, 6, p.accent, 0.45))
    energy.push(`<path d="${arcPath(c, c, R * 0.7, -100, 40)}" fill="none" stroke="${p.accent}" stroke-width="6" opacity="0.35" stroke-linecap="round"/>`)
    energy.push(`<path d="${arcPath(c, c, R * 0.55, 80, 220)}" fill="none" stroke="${p.accent}" stroke-width="4" opacity="0.3" stroke-linecap="round"/>`)
  } else if (state === 'ready') {
    energy.push(`<circle cx="${c}" cy="${c}" r="${R * 0.72}" fill="none" stroke="${p.accent}" stroke-width="3" opacity="0.35"/>`)
    energy.push(`<circle cx="${c}" cy="${c}" r="${R * 0.5}" fill="${p.accent}" opacity="0.15"/>`)
  } else if (state === 'waiting') {
    energy.push(`<path d="${arcPath(c, c, R * 0.72, 25, 335)}" fill="none" stroke="${p.accent}" stroke-width="3" opacity="0.35" stroke-linecap="round"/>`)
    energy.push(`<rect x="${c - 10}" y="${c - R * 0.35}" width="4" height="${R * 0.7}" rx="2" fill="${p.accent}" opacity="0.55"/>`)
    energy.push(`<rect x="${c + 6}" y="${c - R * 0.35}" width="4" height="${R * 0.7}" rx="2" fill="${p.accent}" opacity="0.55"/>`)
  } else if (state === 'failed') {
    energy.push(veins(c, c, R * 0.95, p.accent, 0.55))
    energy.push(`<circle cx="${c}" cy="${c}" r="${R * 0.42}" fill="${p.deep}" opacity="0.55"/>`)
  } else if (state === 'dormant') {
    energy.push(`<circle cx="${c}" cy="${c}" r="${R * 0.65}" fill="none" stroke="${p.accent}" stroke-width="1.5" opacity="0.2"/>`)
  } else if (state === 'success') {
    energy.push(`<circle cx="${c}" cy="${c}" r="${R * 0.78}" fill="none" stroke="${p.accent}" stroke-width="4" opacity="0.4"/>`)
    energy.push(`<path d="${arcPath(c, c, R * 0.55, -30, 90)}" fill="none" stroke="${p.accent}" stroke-width="5" opacity="0.45" stroke-linecap="round"/>`)
  } else if (state === 'disabled') {
    energy.push(`<circle cx="${c}" cy="${c}" r="${R * 0.78}" fill="none" stroke="#3f3f46" stroke-width="1.5" opacity="0.45"/>`)
  }
  energy.push(`</g>`)
  layers.push(energy.join(''))

  // 06 Core
  const coreR =
    state === 'failed' ? R * 0.22 : state === 'ready' ? R * 0.34 : state === 'dormant' ? R * 0.24 : state === 'disabled' ? R * 0.18 : R * 0.28
  const coreOp = disabled ? 0.55 : state === 'dormant' ? 0.75 : 1
  layers.push(
    `<g id="${id('06-core')}">` +
      `<defs><radialGradient id="${id('core')}" cx="50%" cy="45%" r="50%">` +
      `<stop offset="0%" stop-color="#ffffff" stop-opacity="${disabled ? 0.25 : 0.95}"/>` +
      `<stop offset="40%" stop-color="${p.accent}" stop-opacity="${disabled ? 0.4 : 0.9}"/>` +
      `<stop offset="100%" stop-color="${p.primary}" stop-opacity="0.15"/>` +
      `</radialGradient></defs>` +
      `<circle cx="${c}" cy="${c}" r="${coreR * (state === 'failed' ? 1 : 1.15)}" fill="${p.glow}" opacity="${0.35 * coreOp}"/>` +
      `<circle cx="${c}" cy="${c}" r="${coreR}" fill="url(#${id('core')})" opacity="${coreOp}"/>` +
      (state === 'failed'
        ? `<path d="M ${c - 6} ${c - 5} L ${c + 7} ${c - 2} L ${c - 4} ${c + 6}" fill="none" stroke="${p.accent}" stroke-width="1.6" opacity="0.85"/>`
        : '') +
      (state === 'disabled'
        ? `<circle cx="${c}" cy="${c}" r="${coreR * 0.45}" fill="none" stroke="#71717a" stroke-width="1" opacity="0.6"/>`
        : '') +
      `</g>`,
  )

  // 07 Glass Shell
  layers.push(
    `<g id="${id('07-glass-shell')}">` +
      `<circle cx="${c}" cy="${c}" r="${R}" fill="none" stroke="${p.accent}" stroke-width="${disabled ? 1.5 : 2}" opacity="${disabled ? 0.35 : 0.55}"/>` +
      `<path d="M ${c - R * 0.7} ${c - R * 0.55} A ${R * 0.9} ${R * 0.9} 0 0 1 ${c + R * 0.2} ${c - R * 0.88}" fill="none" stroke="#ffffff" stroke-width="3" opacity="${disabled ? 0.06 : 0.18}" stroke-linecap="round"/>` +
      `</g>`,
  )

  // 08 State Signal — unique morphology badge (orb-native, not a UI chip)
  const signal = [`<g id="${id('08-state-signal')}">`]
  if (state === 'dormant') {
    signal.push(`<circle cx="${c}" cy="${c + R + 28}" r="3" fill="${p.primary}" opacity="0.45"/>`)
    signal.push(`<circle cx="${c}" cy="${c + R + 28}" r="7" fill="none" stroke="${p.primary}" stroke-width="1" opacity="0.25"/>`)
  } else if (state === 'ready') {
    signal.push(`<circle cx="${c}" cy="${c + R + 28}" r="4" fill="${p.accent}" opacity="0.9"/>`)
    signal.push(`<circle cx="${c}" cy="${c + R + 28}" r="10" fill="none" stroke="${p.accent}" stroke-width="1.5" opacity="0.45"/>`)
    signal.push(`<circle cx="${c}" cy="${c + R + 28}" r="16" fill="none" stroke="${p.primary}" stroke-width="1" opacity="0.25"/>`)
  } else if (state === 'thinking') {
    // three orbiting nodes = processing
    for (let i = 0; i < 3; i++) {
      const [x, y] = polar(c, c + R + 28, 9, i * 120 + 15)
      signal.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.2" fill="${p.accent}" opacity="${0.5 + i * 0.15}"/>`)
    }
  } else if (state === 'working') {
    signal.push(`<rect x="${c - 14}" y="${c + R + 24}" width="28" height="5" rx="2.5" fill="#1f2937" opacity="0.8"/>`)
    signal.push(`<rect x="${c - 14}" y="${c + R + 24}" width="18" height="5" rx="2.5" fill="${p.primary}" opacity="0.95"/>`)
  } else if (state === 'waiting') {
    signal.push(`<circle cx="${c}" cy="${c + R + 28}" r="7" fill="none" stroke="${p.primary}" stroke-width="2.5" stroke-dasharray="12 8" opacity="0.85"/>`)
    signal.push(`<circle cx="${c}" cy="${c + R + 28}" r="2.5" fill="${p.accent}" opacity="0.9"/>`)
  } else if (state === 'success') {
    signal.push(`<path d="M ${c - 7} ${c + R + 28} l 5 5 l 10 -11" fill="none" stroke="${p.primary}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/>`)
    signal.push(`<circle cx="${c}" cy="${c + R + 28}" r="12" fill="none" stroke="${p.primary}" stroke-width="1.5" opacity="0.4"/>`)
  } else if (state === 'failed') {
    signal.push(`<path d="M ${c} ${c + R + 21} l 7 13 h -14 z" fill="none" stroke="${p.primary}" stroke-width="2" stroke-linejoin="round" opacity="0.9"/>`)
    signal.push(`<line x1="${c}" y1="${c + R + 25}" x2="${c}" y2="${c + R + 29}" stroke="${p.primary}" stroke-width="2" opacity="0.9"/><circle cx="${c}" cy="${c + R + 32}" r="1.4" fill="${p.primary}"/>`)
  } else if (state === 'disabled') {
    signal.push(`<line x1="${c - 8}" y1="${c + R + 28}" x2="${c + 8}" y2="${c + R + 28}" stroke="${p.primary}" stroke-width="2.5" opacity="0.7" stroke-linecap="round"/>`)
  }
  signal.push(`</g>`)
  layers.push(signal.join(''))

  return layers.join('\n')
}

function labeledOrb(state, x, y, size, showLabel = true) {
  const p = PALETTE[state]
  const prefix = state
  return `<g id="cell-${state}" transform="translate(${x},${y})">
  <g id="${state}-orb-root">
${orbContent(state, size, prefix)}
  </g>
  ${showLabel ? `<g id="${state}-label">
  <text x="${size / 2}" y="${size + 22}" text-anchor="middle" fill="#e4e4e7" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600">${esc(p.label)}</text>
  <text x="${size / 2}" y="${size + 40}" text-anchor="middle" fill="#71717a" font-family="Inter, Segoe UI, sans-serif" font-size="11">${esc(p.energy)}</text>
</g>` : ''}
</g>`
}

function frameHeader(title, subtitle, width) {
  return `<g id="frame-header">
  <rect x="0" y="0" width="${width}" height="72" fill="#111113"/>
  <text x="32" y="34" fill="#f4f4f6" font-family="Inter, Segoe UI, sans-serif" font-size="20" font-weight="600">${esc(title)}</text>
  <text x="32" y="54" fill="#a1a1aa" font-family="Inter, Segoe UI, sans-serif" font-size="12">${esc(subtitle)}</text>
</g>`
}

function svgRoot(width, height, content) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
${content}
</svg>
`
}

function write(path, content) {
  writeFileSync(path, content, 'utf8')
  console.log('wrote', path)
}

// --- Individual orb assets (one layer stack each) ---
for (const state of ORDER) {
  const size = 320
  const body = `<rect width="${size}" height="${size + 8}" fill="#0a0a0c" id="artboard-bg"/>
${orbContent(state, size, state)}`
  write(join(ORBS, `${ORDER.indexOf(state) + 1}-${state}.svg`), svgRoot(size, size + 8, body))
}

// --- Frame A — 8 States Overview ---
{
  const W = 1680
  const H = 780
  const cell = 280
  const gapX = 40
  const startX = 48
  const row1 = 120
  const row2 = 120 + cell + 70
  let cells = ''
  ORDER.forEach((state, i) => {
    const col = i % 4
    const row = Math.floor(i / 4)
    const x = startX + col * (cell + gapX)
    const y = row === 0 ? row1 : row2
    // dark cell plate
    cells += `<g id="plate-${state}">
  <rect x="${x - 8}" y="${y - 8}" width="${cell + 16}" height="${cell + 72}" rx="16" fill="#111113" stroke="#1f1f23"/>
</g>
`
    cells += labeledOrb(state, x, y, cell, true)
    cells += `\n`
  })
  const content =
    `<rect width="${W}" height="${H}" fill="#0a0a0c" id="frame-bg"/>` +
    frameHeader('Frame A — 8 States Overview', 'AI Employee Presence Orb · compare body-only legibility (cover labels to test)', W) +
    `<g id="orb-grid">
${cells}
</g>
<g id="footer-note">
  <text x="32" y="${H - 28}" fill="#52525b" font-family="Inter, Segoe UI, sans-serif" font-size="11">Acceptance: hide text — orb body alone must read as dormant / ready / thinking / working / waiting / success / failed / disabled.</text>
</g>`
  write(join(FRAMES, 'A-8-states-overview.svg'), svgRoot(W, H, content))
}

// --- Frame B — Ready / Wake ---
{
  const W = 1280
  const H = 560
  const size = 300
  const y = 140
  const xs = [80, 490, 900]
  const content =
    `<rect width="${W}" height="${H}" fill="#0a0a0c" id="frame-bg"/>` +
    frameHeader('Frame B — Ready / Wake', 'Dormant → Wake → Ready · energy gathers, field opens, presence holds stable', W) +
    `<g id="stage-dormant">${labeledOrb('dormant', xs[0], y, size)}</g>
<g id="wake-arrow">
  <path d="M ${xs[0] + size + 30} ${y + size / 2} L ${xs[1] - 30} ${y + size / 2}" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)"/>
  <rect x="${(xs[0] + size + xs[1]) / 2 - 36}" y="${y + size / 2 - 36}" width="72" height="28" rx="14" fill="#0c1e3a" stroke="#38bdf8" opacity="0.9"/>
  <text x="${(xs[0] + size + xs[1]) / 2}" y="${y + size / 2 - 17}" text-anchor="middle" fill="#7dd3fc" font-family="Inter, Segoe UI, sans-serif" font-size="12" font-weight="600">wake</text>
</g>
<g id="stage-ready">${labeledOrb('ready', xs[2], y, size)}</g>
<defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" auto-start-orient="true">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/>
  </marker>
</defs>
<g id="callouts">
  <text x="${xs[0] + size / 2}" y="${y + size + 64}" text-anchor="middle" fill="#71717a" font-family="Inter, Segoe UI, sans-serif" font-size="12">quiet ember · sparse dust · no listen field</text>
  <text x="${xs[2] + size / 2}" y="${y + size + 64}" text-anchor="middle" fill="#7dd3fc" font-family="Inter, Segoe UI, sans-serif" font-size="12">tight core · concentric listen field · held presence</text>
  <text x="32" y="${H - 28}" fill="#52525b" font-family="Inter, Segoe UI, sans-serif" font-size="11">Capability: Ready ≈ existing listening params (gather/aura) — parameter-driven; sticky presence is UX, not shader.</text>
</g>`
  write(join(FRAMES, 'B-ready-wake.svg'), svgRoot(W, H, content))
}

// --- Frame C — Runtime Journey ---
{
  const W = 1680
  const H = 980
  const size = 220
  function chain(states, y, title, id) {
    const startX = 64
    const gap = 280
    let html = `<g id="${id}"><text x="32" y="${y - 24}" fill="#d4d4d8" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600">${esc(title)}</text>`
    states.forEach((state, i) => {
      const x = startX + i * gap
      html += labeledOrb(state, x, y, size, true)
      if (i < states.length - 1) {
        html += `<g id="${id}-arrow-${i}">
          <path d="M ${x + size + 16} ${y + size / 2} L ${x + gap - 16} ${y + size / 2}" stroke="#52525b" stroke-width="2.5" marker-end="url(#arrow2)"/>
        </g>`
      }
    })
    html += `</g>`
    return html
  }
  const content =
    `<rect width="${W}" height="${H}" fill="#0a0a0c" id="frame-bg"/>` +
    frameHeader('Frame C — Runtime Journey', 'Happy path and failure path · orb body carries the narrative without UI chrome', W) +
    chain(['ready', 'thinking', 'working', 'success', 'dormant'], 140, 'Happy path', 'journey-happy') +
    chain(['working', 'failed', 'dormant'], 520, 'Failure path', 'journey-fail') +
    `<defs>
  <marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" auto-start-orient="true">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="#52525b"/>
  </marker>
</defs>
<g id="journey-notes">
  <text x="32" y="860" fill="#a1a1aa" font-family="Inter, Segoe UI, sans-serif" font-size="12">ready = gathered listening · thinking = spiral winding · working = directed streaks + flow bar signal</text>
  <text x="32" y="884" fill="#a1a1aa" font-family="Inter, Segoe UI, sans-serif" font-size="12">success = short outward pulse then calm · failed = contracted core + torn ring (not flat red) · dormant = return to ember</text>
  <text x="32" y="920" fill="#52525b" font-family="Inter, Segoe UI, sans-serif" font-size="11">Waiting sits off this journey (external hold): see Frame A cell · gate-open ring + pause ticks.</text>
</g>`
  write(join(FRAMES, 'C-runtime-journey.svg'), svgRoot(W, H, content))
}

// --- Frame D — Visual Anatomy ---
{
  const W = 1480
  const H = 920
  const size = 360
  const ox = 72
  const oy = 140
  const layersDemo = [
    ['08-state-signal', 'State Signal', 'Orb-native morphology for the state (tick / wave / tear / gate) — not a DOM chip'],
    ['07-glass-shell', 'Glass Shell', 'Grazing highlight + limb; keeps silhouette readable across states'],
    ['06-core', 'Core', 'Attention anchor: size/brightness encode attention (ready large, failed shrunk)'],
    ['05-inner-energy', 'Inner Energy', 'Volume language: spiral / streaks / veins — primary thinking-vs-working channel'],
    ['04-motion-direction', 'Motion Direction', 'Static capture of motion vector: breathe / listen / orbit / gate / shock / tear'],
    ['03-particle-layer', 'Particle Layer', 'Density + coherence encode activity without hue-only coding'],
    ['02-glow', 'Glow', 'Field intensity under body; dormant low, ready/success high, disabled off'],
    ['01-outer-field', 'Outer Field', 'Ambient presence volume so the orb “occupies space” when awake'],
  ]
  // Full ready orb on left
  const left = `<g id="anatomy-orb-ready">
  <g transform="translate(${ox},${oy})">
${orbContent('ready', size, 'anat')}
  </g>
  <text x="${ox + size / 2}" y="${oy + size + 40}" text-anchor="middle" fill="#7dd3fc" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600">Composite · Ready (reference)</text>
</g>`

  // Exploded stack on right — simplified isolated layers of working state for teaching
  const stackX = 560
  const stackY = 130
  const step = 88
  let stack = `<g id="anatomy-layer-stack">`
  layersDemo.forEach((row, i) => {
    const [idSuffix, name, why] = row
    const y = stackY + i * step
    stack += `<g id="layer-row-${idSuffix}" transform="translate(${stackX},${y})">
  <rect x="0" y="0" width="840" height="76" rx="12" fill="#111113" stroke="#1f1f23"/>
  <rect x="16" y="16" width="44" height="44" rx="10" fill="#0a0a0c" stroke="#27272a"/>
  <text x="38" y="44" text-anchor="middle" fill="#8f87ec" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">${i + 1}</text>
  <text x="76" y="34" fill="#f4f4f6" font-family="Inter, Segoe UI, sans-serif" font-size="14" font-weight="600">${esc(name)}</text>
  <text x="76" y="54" fill="#a1a1aa" font-family="Inter, Segoe UI, sans-serif" font-size="11">${esc(why)}</text>
</g>`
  })
  stack += `</g>`

  // Mini isolated samples
  let samples = `<g id="anatomy-samples">
  <text x="${ox}" y="${oy + size + 100}" fill="#d4d4d8" font-family="Inter, Segoe UI, sans-serif" font-size="13" font-weight="600">Per-state signal sample (body-only)</text>`

  // row of 8 mini orbs
  ORDER.forEach((state, i) => {
    const x = ox + (i % 4) * 160
    const y = oy + size + 120 + Math.floor(i / 4) * 170
    samples += `<g transform="translate(${x},${y})" id="mini-${state}">
  <g id="${state}-mini-root">${orbContent(state, 120, `m-${state}`)}</g>
  <text x="60" y="140" text-anchor="middle" fill="#71717a" font-family="Inter, Segoe UI, sans-serif" font-size="11">${esc(PALETTE[state].label)}</text>
</g>`
  })
  samples += `</g>`

  const content =
    `<rect width="${W}" height="${H}" fill="#0a0a0c" id="frame-bg"/>` +
    frameHeader('Frame D — Visual Anatomy', 'Layer stack rationale · each layer exists to answer “what state is this employee in?”', W) +
    left +
    stack +
    samples +
    `<g id="capability-tags">
  <text x="560" y="860" fill="#52525b" font-family="Inter, Segoe UI, sans-serif" font-size="11">Legend for next round: existing · parameter-driven · renderer-change · new-capability (see CAPABILITY-NOTES.md)</text>
</g>`
  write(join(FRAMES, 'D-visual-anatomy.svg'), svgRoot(W, H, content))
}

// --- Import guide + capability notes ---
write(
  join(ROOT, 'README-IMPORT.md'),
  `# AI Employee Orb — Presence Visual Design (Figma import pack)

**No plugin / SDK / Runtime / DS v2 code was modified.** This folder is a standalone visual exploration pack.

## Where to put it in Figma

1. Create a new Figma file (suggested name: \`AI Orb — Presence Visual Design\`).
2. Create 4 pages (or top-level frames):
   - **A · 8 States Overview**
   - **B · Ready / Wake**
   - **C · Runtime Journey**
   - **D · Visual Anatomy**
3. Drag each SVG from \`frames/\` onto the matching page (Figma imports SVG as a layer tree).
4. Optionally drag \`orbs/*.svg\` into a **Components / Orbs** page and mark each orb root as a component.

| Frame | File |
| --- | --- |
| A | \`frames/A-8-states-overview.svg\` |
| B | \`frames/B-ready-wake.svg\` |
| C | \`frames/C-runtime-journey.svg\` |
| D | \`frames/D-visual-anatomy.svg\` |

Individual state stacks (best for inspecting layers): \`orbs/1-dormant.svg\` … \`orbs/8-disabled.svg\`.

## Layer naming (matches Frame D)

Each orb imports as groups:

1. \`01-outer-field\`
2. \`02-glow\`
3. \`03-particle-layer\`
4. \`04-motion-direction\`
5. \`05-inner-energy\`
6. \`06-core\`
7. \`07-glass-shell\`
8. \`08-state-signal\`

## Acceptance ritual (your bar)

Open Frame A → hide/reduce opacity of all \`*-label\` groups → judge **only the orb bodies**.

## Design sources (read-only references)

- \`F:\\Cline\\ai-orb-plugin\` (motion languages breathe/gather/wind/release) — not modified
- DS v2 visual language / state colors (read-only) — not modified
`,
)

write(
  join(ROOT, 'CAPABILITY-NOTES.md'),
  `# Capability notes — Presence visual design vs current Orb

How to read:

- **Existing capability** — current renderer already expresses this language
- **Can be parameter-driven** — same shaders/profiles, new numbers or intensity curves
- **Requires Orb renderer change** — needs shader/geometry/timeline work beyond params
- **Requires new visual capability** — new layer or pass (still inside plugin, not DS v2)

| State | Designed look | Capability |
| --- | --- | --- |
| Dormant | Quiet ember, sparse dust, almost-still arc | **Existing / parameter-driven** (idle breathe already close; may lower particle brightness) |
| Ready | Tight core + concentric listen field + held presence | **Existing / parameter-driven** (listening gather/aura ≈ this; concentric field may be **renderer** if we want true multi-ring listen) |
| Thinking | Spiral ribbons, differential winding, soft multi-layer | **Existing** (thinking spin/warp/veins) — emphasize spiral read in Figma as ideal |
| Working | Directed streaks + orbit drive + mini flow signal | **Mostly existing**; strong comet trails / readable flow bar under orb may be **renderer change** |
| Waiting | Open gate ring + pause ticks + suspended core | **Requires Orb renderer change** (gap gate + freeze language not in 6-state profiles; waiting currently paints as listening) |
| Success | Short outward pulse remnant + calm settle | **Existing** (success release) — wave remnant timing is **parameter-driven** |
| Failed | Contracted core + jagged veins + torn ring | **Partial existing** (error warp/veins); explicit torn ring + hard contract may need **renderer change** |
| Disabled | Hollow shell, no field, no particles, dead core | **Requires new visual capability** (current disabled is UI dim + idle paint, not an orb-native “spent” mode) |

## Ready / Thinking / Working distinction (design intent)

| | Ready | Thinking | Working |
| --- | --- | --- | --- |
| Primary channel | Concentric **listen field** (external attention) | **Internal spiral** (no external focus) | **Directed streaks** (execution vectors) |
| Core | Large, stable, bright | Mid, soft, non-dominant | Bright, slightly elongated energy |
| Motion glyph | Even rings | Dashed winding orbit | Asymmetric arcs + chevron |
| Color (support only) | Cyan listen | Violet winding | Blue run |
| What you feel | “It hears me” | “It is considering” | “It is doing” |

## Most worth implementing next (recommendation)

1. **Waiting gate language** — currently missing from renderer (biggest unique win; orange hold is in DS already).
2. **Failed fracture** — make failure readable as *interruption* without relying on red-only.
3. **Disabled spent-core** — orb-native off state instead of CSS grayscale.
4. **Working comet trails** — strengthen execution read while keeping DS “single motion channel” discipline.

Do **not** implement in this round — this pack is design-review only.
`,
)

write(
  join(ROOT, 'FIGMA-PAGE-STRUCTURE.json'),
  JSON.stringify(
    {
      fileSuggestion: 'AI Orb — Presence Visual Design',
      pages: [
        { name: 'A · 8 States Overview', import: 'frames/A-8-states-overview.svg' },
        { name: 'B · Ready / Wake', import: 'frames/B-ready-wake.svg' },
        { name: 'C · Runtime Journey', import: 'frames/C-runtime-journey.svg' },
        { name: 'D · Visual Anatomy', import: 'frames/D-visual-anatomy.svg' },
        { name: 'Components · Orbs', import: 'orbs/*.svg' },
      ],
      states: ORDER.map((s, i) => ({ index: i + 1, presence: s, file: `orbs/${i + 1}-${s}.svg`, palette: PALETTE[s] })),
      acceptance: 'Cover all labels; orb body alone must communicate presence.',
      frozen: [
        'F:\\Cline\\ai-orb-plugin',
        'F:\\Cline\\plugin-sdk',
        'F:\\Cline\\plugin-runtime',
        'F:\\AI-Projects\\experiments\\ai-employee-os-design-system',
      ],
    },
    null,
    2,
  ),
)

console.log('done')
