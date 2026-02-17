'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ServicesPanels3D } from '../3d/ServicesPanels'

const services = [
  {
    icon: 'bx-code',
    title: 'Android Developer',
    description: 'I am an Android developer passionate about creating impactful mobile applications that solve real-world challenges. With hands-on experience in Java and Android Studio, I specialize in building scalable and user-friendly apps with robust functionality and intuitive design.',
  },
  {
    icon: 'bx-crop',
    title: 'Web Developer',
    description: 'I\'m a passionate web developer with 2 years of experience in building dynamic, user-friendly, and efficient websites and web applications. I specialize in front-end and back-end development, with a strong focus on creating seamless user experiences.',
  },
  {
    icon: 'bxl-apple',
    title: 'UI/UX Designer',
    description: 'I am a passionate UI Designer with a keen eye for detail and a commitment to creating intuitive and visually appealing user experiences. I design web and mobile interfaces, specializing in transforming complex ideas into user-friendly designs.',
  },
]

export function ServicesSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="services"
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
            My <span className="text-accent-cyan">Services</span>
          </h1>
        </motion.div>

        {/* 3D Services Visualization */}
        {isClient && (
          <motion.div
            className="h-96 mb-16 rounded-xl overflow-hidden glass-panel neon-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ServicesPanels3D />
          </motion.div>
        )}

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="glass-panel p-8 rounded-xl neon-glow hover:border-accent-cyan/50 transition-all"
              variants={itemVariants}
              whileHover={{ y: -10, borderColor: 'rgba(0, 238, 255, 0.5)' }}
            >
              <i className={`bx ${service.icon} text-5xl text-accent-cyan mb-4 block`}></i>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-text-light leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="text-accent-cyan hover:text-accent-blue smooth transition-colors font-semibold">
                Learn More →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
