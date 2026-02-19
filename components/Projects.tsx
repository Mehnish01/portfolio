'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    id: 1,
    title: 'Interactive Portfolio',
    description: 'A stunning portfolio with React Three Fiber 3D scenes and smooth animations.',
    tech: ['React', 'Three.js', 'Framer Motion', 'Next.js'],
    link: '#',
    color: 'from-primary to-secondary',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time updates and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    color: 'from-accent to-primary',
  },
  {
    id: 3,
    title: 'Real-Time Chat App',
    description: 'Collaborative chat application with WebSocket integration and animations.',
    tech: ['React', 'WebSocket', 'Express', 'PostgreSQL'],
    link: '#',
    color: 'from-secondary to-accent',
  },
]

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="w-full py-20 px-6 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-balance mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-foreground/60 text-lg max-w-2xl mx-auto">
            Showcase of recent work demonstrating expertise in full-stack development and creative design
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 p-8 hover:border-primary/60 transition-colors cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 217, 255, 0.1)' }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated Gradient Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.15 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 border border-primary/30 rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Arrow */}
                <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                  <span>View Project</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50"
                layoutId={`border-${project.id}`}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
