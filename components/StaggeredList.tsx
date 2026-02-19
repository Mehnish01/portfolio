'use client'

import { motion } from 'framer-motion'

interface StaggeredListProps {
  items: string[]
  className?: string
}

export default function StaggeredList({ items, className = '' }: StaggeredListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.ul
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.li key={index} variants={itemVariants} className="flex items-center gap-3">
          <span className="text-primary text-xl">→</span>
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}
