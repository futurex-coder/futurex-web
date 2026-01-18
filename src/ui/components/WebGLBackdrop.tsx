import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useViewport } from '../hooks/useViewport'
import { useReducedMotion } from '../hooks/useReducedMotion'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const prefersReducedMotion = useReducedMotion()

  const particleCount = 2000
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (prefersReducedMotion || !ref.current) return

    const time = state.clock.getElapsedTime()
    ref.current.rotation.x = time * 0.05
    ref.current.rotation.y = time * 0.075
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00fff9"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function GridLines() {
  const ref = useRef<THREE.Group>(null!)
  const prefersReducedMotion = useReducedMotion()

  useFrame((state) => {
    if (prefersReducedMotion || !ref.current) return

    const time = state.clock.getElapsedTime()
    ref.current.position.z = (time * 0.5) % 2
  })

  return (
    <group ref={ref}>
      <gridHelper args={[20, 20, '#00fff9', '#003333']} position={[0, -3, 0]} />
    </group>
  )
}

export function WebGLBackdrop() {
  const { isMobile } = useViewport()
  const prefersReducedMotion = useReducedMotion()

  if (isMobile || prefersReducedMotion) {
    return null
  }

  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <ParticleField />
          <GridLines />
        </Suspense>
      </Canvas>
    </div>
  )
}
