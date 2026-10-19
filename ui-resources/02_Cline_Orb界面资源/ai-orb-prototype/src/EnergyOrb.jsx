import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { fragmentShader, vertexShader } from './shaders.js'
import { STATES } from './states.js'

const damp = THREE.MathUtils.damp
/** Frame-rate independent exponential approach. */
const approach = (current, target, lambda, delta) => damp(current, target, lambda, delta)

/**
 * EnergyCore — shader-driven energy sphere.
 * All visual state lives in uniforms; targets come from the per-state profile
 * and are approached with frame-rate independent damping (no jumps on switch).
 */
export function EnergyOrb({ stateName, amplitude, bloomTarget }) {
  const meshRef = useRef()

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uNoiseFrequency: { value: STATES.idle.noiseFrequency },
          uNoiseAmplitude: { value: STATES.idle.noiseAmplitude },
          uAmplitude: { value: 0 },
          uMorph: { value: 0 },
          uColorPrimary: { value: new THREE.Color(STATES.idle.colorPrimary) },
          uColorSecondary: { value: new THREE.Color(STATES.idle.colorSecondary) },
          uEmissive: { value: STATES.idle.emissive },
          uFresnelPower: { value: STATES.idle.fresnelPower },
        },
      }),
    [],
  )

  // Smoothed current values (colors kept as THREE.Color for cheap lerp)
  const current = useRef({
    frequency: STATES.idle.noiseFrequency,
    noiseAmplitude: STATES.idle.noiseAmplitude,
    emissive: STATES.idle.emissive,
    fresnelPower: STATES.idle.fresnelPower,
    scale: STATES.idle.scale,
    morph: STATES.idle.morph,
    amplitude: 0,
    bloom: STATES.idle.bloom,
    colorPrimary: new THREE.Color(STATES.idle.colorPrimary),
    colorSecondary: new THREE.Color(STATES.idle.colorSecondary),
    targetPrimary: new THREE.Color(STATES.idle.colorPrimary),
    targetSecondary: new THREE.Color(STATES.idle.colorSecondary),
  })

  useFrame((_, delta) => {
    const cfg = STATES[stateName] ?? STATES.idle
    const c = current.current
    const u = material.uniforms

    u.uTime.value += delta

    // Approach targets (frame-rate independent)
    c.frequency = approach(c.frequency, cfg.noiseFrequency, 3, delta)
    c.noiseAmplitude = approach(c.noiseAmplitude, cfg.noiseAmplitude, 3, delta)
    c.emissive = approach(c.emissive, cfg.emissive, 3, delta)
    c.fresnelPower = approach(c.fresnelPower, cfg.fresnelPower, 3, delta)
    c.scale = approach(c.scale, cfg.scale, 3, delta)
    c.morph = approach(c.morph, cfg.morph, 3, delta)
    c.amplitude = approach(c.amplitude, amplitude * cfg.amplitudeReactivity, 8, delta)
    c.bloom = approach(c.bloom, cfg.bloom, 3, delta)
    c.targetPrimary.set(cfg.colorPrimary)
    c.targetSecondary.set(cfg.colorSecondary)
    const colorLerp = 1 - Math.exp(-3 * delta)
    c.colorPrimary.lerp(c.targetPrimary, colorLerp)
    c.colorSecondary.lerp(c.targetSecondary, colorLerp)

    // Push to uniforms
    u.uNoiseFrequency.value = c.frequency
    u.uNoiseAmplitude.value = c.noiseAmplitude
    u.uEmissive.value = c.emissive
    u.uFresnelPower.value = c.fresnelPower
    u.uMorph.value = c.morph
    u.uAmplitude.value = c.amplitude
    u.uColorPrimary.value.copy(c.colorPrimary)
    u.uColorSecondary.value.copy(c.colorSecondary)

    if (meshRef.current) {
      meshRef.current.scale.setScalar(c.scale)
      meshRef.current.rotation.y += delta * 0.06
    }
    if (bloomTarget) bloomTarget.current = c.bloom
  })

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1, 48), [])

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <primitive object={material} attach="material" />
    </mesh>
  )
}