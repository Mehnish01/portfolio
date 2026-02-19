'use client'

import { motion } from 'framer-motion'

interface Skill {
  name: string
  level: 'expert' | 'advanced' | 'intermediate'
}

const skills: Skill[] = [
  { name: 'React', level: 'expert' },
  { name: 'Next.js', level: 'expert' },
  { name: 'Three.js', level: 'advanced' },
  { name: 'Framer Motion', level: 'advanced' },
  { name: 'TypeScript', level: 'expert' },
  { name: 'Tailwind CSS', level: 'expert' },
  { name: 'Node.js', level: 'advanced' },
  { name: 'WebSocket', level: 'advanced' },
  { name: 'PostgreSQL', level: 'intermediate' },
  { name: 'MongoDB', level: 'intermediate' },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'expert':
      return 'from-primary to-secondary'
    case 'advanced':
      return 'from-secondary to-accent'
    default:
      return 'from-accent to-primary'
  }
}

export default function SkillsCloud() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      className="flex flex-wrap gap-3 justify-center lg:justify-start"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <div
            className={`px-4 py-2 bg-gradient-to-r ${getLevelColor(skill.level)} bg-clip-text text-transparent font-semibold border border-primary/30 rounded-full text-sm hover:border-primary/60 transition-colors cursor-pointer`}
          >
            {skill.name}
          </div>
          {skill.level === 'expert' && (
            <motion.span
              className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-xs text-background"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ★
            </motion.span>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
