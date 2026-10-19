import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { EnergyOrb } from './EnergyOrb.jsx'
import { STATES, STATE_NAMES } from './states.js'

/** Keeps the Bloom intensity glued to the damped target from EnergyOrb. */
function BloomDriven({ targetRef }) {
  const effect = useRef(null)
  useFrame((_, delta) => {
    if (effect.current) {
      effect.current.intensity = THREE.MathUtils.damp(effect.current.intensity, targetRef.current, 3, delta)
    }
  })
  return <Bloom ref={effect} intensity={0.4} luminanceThreshold={0.15} luminanceSmoothing={0.3} mipmapBlur />
}

export function App() {
  const [stateName, setStateName] = useState('idle')
  const [amplitude, setAmplitude] = useState(0.25)
  const bloomTarget = useRef(STATES.idle.bloom)
  const cfg = STATES[stateName] ?? STATES.idle

  return (
    <main className="shell">
      <header className="head">
        <p className="eyebrow">AI ORB · ENERGYCORE PROTOTYPE · M0</p>
        <h1>Energy Orb Prototype</h1>
        <p className="subtitle">
          Shader displacement + Fresnel + Bloom validation. Independent of the host — no Agent Core,
          no architecture coupling.
        </p>
      </header>

      <section className="stage">
        <div className="canvas-frame">
          <Canvas
            camera={{ position: [0, 0, 3.4], fov: 42 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            <EnergyOrb stateName={stateName} amplitude={amplitude} bloomTarget={bloomTarget} />
            <EffectComposer>
              <BloomDriven targetRef={bloomTarget} />
              <Vignette eskil={false} offset={0.25} darkness={0.75} />
            </EffectComposer>
          </Canvas>
        </div>
        <div className="readout">
          <strong>{stateName}</strong>
          <span>{cfg.label}</span>
          <ul>
            <li>noise: {cfg.noiseFrequency.toFixed(1)} / {cfg.noiseAmplitude.toFixed(2)}</li>
            <li>emissive: {cfg.emissive.toFixed(2)}</li>
            <li>fresnel: {cfg.fresnelPower.toFixed(1)}</li>
            <li>morph: {cfg.morph.toFixed(2)}</li>
            <li>bloom: {cfg.bloom.toFixed(2)}</li>
            <li>amplitude: {amplitude.toFixed(2)} × {cfg.amplitudeReactivity.toFixed(1)}</li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="row" role="group" aria-label="State">
          {STATE_NAMES.map((name) => (
            <button
              key={name}
              type="button"
              data-active={name === stateName}
              onClick={() => setStateName(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <label className="slider">
          amplitude
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={amplitude}
            onChange={(event) => setAmplitude(Number(event.target.value))}
          />
          {amplitude.toFixed(2)}
        </label>
        <p className="note">
          Try <b>listening</b> + high amplitude for the input-reactive surface, and <b>error</b> for
          the turbulence morph.
        </p>
      </section>
    </main>
  )
}