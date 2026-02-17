'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticlesProps {
  count?: number
}

function ParticleSystem({ count = 300 }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const particlesData = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200
      positions[i + 1] = (Math.random() - 0.5) * 200
      positions[i + 2] = (Math.random() - 0.5) * 200
    }
    return positions
  }, [count])

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001
      pointsRef.current.rotation.y += 0.0002
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesData.length / 3}
          array={particlesData}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        color="#00eeff"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  )
}

export function BackgroundParticles() {
  return (
    <Canvas
      className="fixed inset-0 pointer-events-none opacity-20"
      camera={{ position: [0, 0, 1], fov: 75 }}
      gl={{ 
        antialias: true, 
        alpha: true, 
        stencil: false, 
        depth: true,
        powerPreference: 'high-performance'
      }}
    >
      <color attach="background" args={['#0f5050']} />
      <ParticleSystem count={300} />
    </Canvas>
  )
}
