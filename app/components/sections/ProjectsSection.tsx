'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ProjectOrbit } from '../3d/ProjectOrbit'

const projects = [
  {
    id: 1,
    title: 'UI/UX Design',
    image: '/ui.jpg',
    description: 'Innovative user interface and experience design. Specialize in transforming complex ideas into user-friendly designs that enhance functionality. Designing wireframes, prototypes, and high-fidelity visuals using tools like Figma, Sketch, and Adobe XD.',
  },
  {
    id: 2,
    title: 'Web Development',
    image: '/web.jpg',
    description: 'Modern and responsive web development solutions. I specialize in front-end and back-end development with a strong focus on creating seamless user experiences using technologies like HTML, CSS, JavaScript, React, Node.js, and Python.',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    image: '/app.jpg',
    description: 'Feature-rich mobile application development. Passionate about creating impactful mobile applications that solve real-world challenges. Building scalable and user-friendly apps with robust functionality using Java and Android Studio.',
  },
]

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-20 px-6 md:px-12 z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Latest <span className="text-accent-cyan">Projects</span>
          </h1>
        </motion.div>

        {/* 3D Projects Visualization */}
        {isClient && (
          <motion.div
            className="h-96 mb-16 rounded-xl overflow-hidden glass-panel neon-glow hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProjectOrbit />
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-xl neon-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  priority={i === 0}
                />
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#051129] via-[rgba(5,17,41,0.7)] to-transparent flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-3 text-accent-cyan">
                  {project.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="px-4 py-2 bg-accent-cyan text-[#051129] rounded font-semibold text-sm hover:bg-accent-blue smooth transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
