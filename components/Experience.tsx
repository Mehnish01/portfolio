'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const experiences = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2023 - Present',
    description: 'Leading frontend development initiatives, mentoring team members, and architecting scalable React applications.',
    achievements: [
      'Increased app performance by 40% through optimization',
      'Led migration to Next.js and modern tooling',
      'Mentored 3 junior developers',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    period: '2021 - 2023',
    description: 'Developed full-stack applications using React, Node.js, and PostgreSQL for enterprise clients.',
    achievements: [
      'Built 5+ production applications',
      'Implemented real-time features with WebSocket',
      'Reduced API response time by 60%',
    ],
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2020 - 2021',
    description: 'Started career building responsive web applications and learning modern web development practices.',
    achievements: [
      'Completed 10+ client projects',
      'Earned certification in React',
      'Contributed to open-source projects',
    ],
  },
]

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, margin: '-100px' })
  const [selectedExp, setSelectedExp] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="experience" className="w-full py-20 px-6 bg-gradient-to-b from-background/80 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A journey through my professional development and key achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Timeline Navigation */}
          <motion.div
            className="lg:col-span-1 flex lg:flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.id}
                onClick={() => setSelectedExp(index)}
                className={`text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedExp === index
                    ? 'border-primary bg-primary/10'
                    : 'border-primary/20 hover:border-primary/60'
                }`}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="font-semibold text-foreground">{exp.company}</p>
                <p className="text-sm text-foreground/60 mt-1">{exp.period}</p>
              </motion.button>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div
            className="lg:col-span-3 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8"
            key={selectedExp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {experiences[selectedExp].role}
                  </h3>
                  <p className="text-primary text-lg mt-2">{experiences[selectedExp].company}</p>
                </div>
                <span className="text-foreground/60 font-mono">
                  {experiences[selectedExp].period}
                </span>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                {experiences[selectedExp].description}
              </p>

              {/* Achievements */}
              <div className="space-y-3">
                <p className="text-sm text-primary font-semibold">Key Achievements:</p>
                {experiences[selectedExp].achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <span className="text-secondary mt-1 flex-shrink-0">✓</span>
                    <span className="text-foreground/80">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
