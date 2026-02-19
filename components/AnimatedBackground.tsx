'use client'

import { Canvas } from '@react-three/fiber'
import { Sphere, Stars, OrbitControls, Preload } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (!meshRef.current) return

    let time = 0
    const animate = () => {
      if (meshRef.current) {
        time += 0.001
        meshRef.current.position.y = Math.sin(time) * 0.5
        meshRef.current.rotation.x += 0.0008
        meshRef.current.rotation.y += 0.0012
      }
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
      <meshPhongMaterial
        color="#00d9ff"
        emissive="#003355"
        wireframe={false}
        shininess={150}
      />
    </Sphere>
  )
}

export default function AnimatedBackground() {
  return (
    <Canvas
      className="w-full h-full absolute inset-0"
      camera={{ position: [0, 0, 2], fov: 75 }}
      gl={{
        antialias: true,
        alpha: true,
        precision: 'highp',
      }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
      <pointLight position={[-10, -10, 5]} intensity={0.5} color="#ff006e" />
      <FloatingSphere />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <Preload all />
    </Canvas>
  )
}
