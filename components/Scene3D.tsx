'use client'

import { Canvas } from '@react-three/fiber'
import { Sphere, OrbitControls, Preload } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface Scene3DProps {
  autoRotate?: boolean
  zoom?: number
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (!meshRef.current) return

    let animationFrameId: number
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.002
        meshRef.current.rotation.y += 0.003
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <meshPhongMaterial
        color="#00d9ff"
        emissive="#005577"
        wireframe={false}
        shininess={100}
      />
    </Sphere>
  )
}

function Lights() {
  return (
    <>
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#ff006e" />
      <ambientLight intensity={0.5} />
    </>
  )
}

export default function Scene3D({ autoRotate = true, zoom = 1 }: Scene3DProps) {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 3.5 * zoom], fov: 75 }}
      gl={{
        antialias: true,
        alpha: true,
      }}
      dpr={[1, 2]}
    >
      <Lights />
      <AnimatedSphere />
      {autoRotate && <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />}
      <Preload all />
    </Canvas>
  )
}
