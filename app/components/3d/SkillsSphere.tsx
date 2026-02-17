'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface SkillSphereProp {
  name: string
  color: string
  position: [number, number, number]
  icon: string
}

function SkillSphere({ name, color, position, icon }: SkillSphereProp) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.y += 0.003
      if (hovered) {
        meshRef.current.scale.lerp(
          new THREE.Vector3(1.3, 1.3, 1.3),
          0.1
        )
      } else {
        meshRef.current.scale.lerp(
          new THREE.Vector3(1, 1, 1),
          0.1
        )
      }
    }
  })

  return (
    <Sphere
      ref={meshRef}
      args={[0.6, 32, 32]}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={hovered ? 0.8 : 0.4}
        metalness={0.7}
        roughness={0.2}
        wireframe={false}
      />
    </Sphere>
  )
}

function SkillsLighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00eeff" />
      <pointLight position={[-10, -10, 10]} intensity={0.6} color="#0084ff" />
    </>
  )
}

interface SkillsSphereSectionProps {
  skills?: SkillSphereProp[]
}

export function SkillsSphereSection({ skills }: SkillsSphereSectionProps) {
  const defaultSkills: SkillSphereProp[] = [
    {
      name: 'HTML',
      color: '#ff6b6b',
      position: [-3, 0, 0],
      icon: '📄',
    },
    {
      name: 'CSS',
      color: '#4ecdc4',
      position: [0, 2, 0],
      icon: '🎨',
    },
    {
      name: 'JavaScript',
      color: '#f9ca24',
      position: [3, 0, 0],
      icon: '⚡',
    },
    {
      name: 'React',
      color: '#00bcd4',
      position: [0, -2, 0],
      icon: '⚛️',
    },
    {
      name: 'Android',
      color: '#3ddc84',
      position: [-2, -1.5, -2],
      icon: '📱',
    },
    {
      name: 'Figma',
      color: '#a29bfe',
      position: [2, 1.5, -2],
      icon: '🎭',
    },
  ]

  const displaySkills = skills || defaultSkills

  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 8], fov: 75 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#0f5050']} />
      <SkillsLighting />
      {displaySkills.map((skill, i) => (
        <SkillSphere key={i} {...skill} />
      ))}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  )
}
