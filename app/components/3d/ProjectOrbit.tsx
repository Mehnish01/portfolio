'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

interface OrbitingCardProps {
  position: [number, number, number]
  angle: number
  speed: number
  radius: number
  color: string
  index: number
}

function OrbitingCard({
  angle,
  speed,
  radius,
  color,
  index,
}: Omit<OrbitingCardProps, 'position'>) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.elapsedTime * speed
      const x = Math.cos(time + angle) * radius
      const z = Math.sin(time + angle) * radius
      const y = Math.sin(time + angle + index) * 0.5

      meshRef.current.position.set(x, y, z)
      meshRef.current.rotation.x += 0.004
      meshRef.current.rotation.y += 0.006
    }
  })

  return (
    <Box ref={meshRef} args={[1.2, 1.6, 0.3]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.6}
        roughness={0.2}
        wireframe={false}
      />
    </Box>
  )
}

function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#00eeff"
        emissive="#00eeff"
        emissiveIntensity={0.7}
        metalness={0.8}
        roughness={0.1}
        wireframe={true}
      />
    </Box>
  )
}

function ProjectLights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00eeff" />
      <pointLight position={[-10, -10, 10]} intensity={0.7} color="#0084ff" />
    </>
  )
}

export function ProjectOrbit() {
  const projects = [
    {
      angle: 0,
      speed: 0.3,
      radius: 4,
      color: '#00eeff',
    },
    {
      angle: (2 * Math.PI) / 3,
      speed: 0.3,
      radius: 4,
      color: '#0084ff',
    },
    {
      angle: (4 * Math.PI) / 3,
      speed: 0.3,
      radius: 4,
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
      <ProjectLights />
      <CentralSphere />
      {projects.map((project, i) => (
        <OrbitingCard
          key={i}
          angle={project.angle}
          speed={project.speed}
          radius={project.radius}
          color={project.color}
          index={i}
          position={[0, 0, 0]}
        />
      ))}
      <Stars radius={100} depth={50} count={500} factor={4} saturation={0} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.5}
      />
    </Canvas>
  )
}
