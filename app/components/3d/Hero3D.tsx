'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
    }
  })

  return (
    <Box ref={meshRef} args={[2, 2, 2]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#00eeff"
        emissive="#00eeff"
        emissiveIntensity={0.5}
        wireframe={false}
        metalness={0.7}
        roughness={0.2}
      />
    </Box>
  )
}

function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.3
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.z += 0.003
    }
  })

  return (
    <Sphere ref={meshRef} args={[0.8, 32, 32]} position={[3.5, 0, 0]}>
      <meshStandardMaterial
        color="#0084ff"
        emissive="#0084ff"
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.1}
      />
    </Sphere>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00eeff" />
      <pointLight position={[-10, -10, 10]} intensity={0.4} color="#0084ff" />
      <pointLight position={[0, 0, 5]} intensity={0.6} color="#00eeff" />
    </>
  )
}

export function Hero3D() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
    >
      <color attach="background" args={['#0f5050']} />
      <Lights />
      <RotatingCube />
      <FloatingOrb />
      <Stars radius={100} depth={50} count={500} factor={4} saturation={0} />
    </Canvas>
  )
}
