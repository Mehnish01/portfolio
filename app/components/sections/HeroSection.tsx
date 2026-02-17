'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Hero3D } from '../3d/Hero3D'
import Typed from 'typed.js'

export function HeroSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const options = {
      strings: [
        'Android Developer',
        'Web Developer',
        'UI/UX Designer',
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    }

    const typed = new Typed('.typed-text', options)
    return () => {
      typed.destroy()
    }
  }, [isClient])

  return (
    <section id="home" className="relative w-full h-screen pt-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {isClient && <Hero3D />}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-between px-6 md:px-12">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl text-accent-cyan">Hello, It's Me</h3>
            <h1 className="text-5xl md:text-7xl font-bold glow-text">
              Mehnish Saifi
            </h1>
            <h3 className="text-xl md:text-2xl">
              I'm a <span className="text-accent-cyan font-semibold typed-text"></span>
            </h3>
          </motion.div>

          <motion.p
            className="text-lg text-text-light max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I'm an Android and Web Developer with hands-on experience in Android Studio, Firebase, and Jetpack components. With expertise in front-end and back-end development, I strive to build solutions that are both visually appealing and highly functional.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://www.linkedin.com/in/mehnish-saifi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:text-accent-blue smooth transition-colors text-3xl"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#about"
            className="inline-block px-8 py-3 bg-accent-cyan text-[#051129] font-bold rounded-lg hover:bg-accent-blue smooth transition-all hover:scale-105 neon-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More About Me
          </motion.a>
        </motion.div>

        {/* Right Side - Empty for 3D (hidden on mobile) */}
        <div className="hidden md:block w-1/2"></div>
      </div>
    </section>
  )
}
