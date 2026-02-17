'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface ServicePanel3DProps {
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
  index: number
}

function ServicePanel({ position, rotation, color, index }: ServicePanel3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + Math.sin(clock.elapsedTime + index) * 0.3
      meshRef.current.rotation.y = rotation[1] + clock.elapsedTime * 0.3
      meshRef.current.rotation.z = rotation[2] + Math.cos(clock.elapsedTime + index) * 0.2
      
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.15)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.15)
      }
    }
  })

  return (
    <Box
      ref={meshRef}
      args={[1.2, 1.8, 0.2]}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={hovered ? 0.8 : 0.5}
        metalness={0.8}
        roughness={0.1}
        wireframe={false}
        transparent
        opacity={0.9}
      />
    </Box>
  )
}

function ServiceLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[15, 15, 15]} intensity={1} color="#00eeff" />
      <pointLight position={[-15, -15, 15]} intensity={0.8} color="#0084ff" />
      <pointLight position={[0, 0, 10]} intensity={0.6} color="#00eeff" />
    </>
  )
}

export function ServicesPanels3D() {
  const services = [
    {
      position: [-3, 0, 0] as [number, number, number],
      rotation: [0, 0.5, 0] as [number, number, number],
      color: '#00eeff',
    },
    {
      position: [0, 2, -0.5] as [number, number, number],
      rotation: [0.3, 0, 0] as [number, number, number],
      color: '#0084ff',
    },
    {
      position: [3, 0, 0] as [number, number, number],
      rotation: [0, -0.5, 0] as [number, number, number],
      color: '#00eeff',
    },
  ]

  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 8], fov: 75 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#0f5050']} />
      <ServiceLights />
      {services.map((service, i) => (
        <ServicePanel
          key={i}
          position={service.position}
          rotation={service.rotation}
          color={service.color}
          index={i}
        />
      ))}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={3}
      />
    </Canvas>
  )
}
