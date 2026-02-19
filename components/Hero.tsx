'use client'

import { motion } from 'framer-motion'
import Scene3D from './Scene3D'
import SkillsCloud from './SkillsCloud'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 w-full h-full">
        {isMounted && <Scene3D autoRotate zoom={1} />}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between w-full gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <motion.div className="flex-1 text-center lg:text-left" variants={containerVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-balance"
            variants={itemVariants}
          >
            Hello, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Mehnish
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-foreground/80 mb-8 text-balance"
            variants={itemVariants}
          >
            Creative developer building immersive digital experiences with modern web technologies
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Skills Cloud */}
          <motion.div className="mt-10" variants={itemVariants}>
            <SkillsCloud />
          </motion.div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          className="hidden lg:block flex-1 h-96"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-primary/60">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
