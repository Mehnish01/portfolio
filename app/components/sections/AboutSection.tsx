'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-20 px-6 md:px-12 z-10 bg-gradient-to-b from-transparent via-[rgba(15,80,80,0.5)] to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-4 neon-glow">
              <Image
                src="/Mine.png"
                alt="Mehnish Saifi"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-accent-cyan">Me</span>
              </h2>
              <h4 className="text-xl text-accent-cyan mt-2">Android Developer</h4>
            </div>

            <p className="text-lg text-text-light leading-relaxed">
              I am a skilled Android Developer with <strong>2 years</strong> of experience in designing, developing, and maintaining mobile applications for the Android platform. With expertise in Java and Kotlin, I specialize in creating user-friendly, high-performance, and scalable apps tailored to meet user needs and business goals.
            </p>

            <p className="text-lg text-text-light leading-relaxed">
              I have a strong understanding of Android SDK, Jetpack components, and third-party libraries, with a proven track record of delivering apps with clean architecture and responsive design. My development process includes efficient use of RESTful APIs, Firebase services, and modern tools like Git and Android Studio.
            </p>

            <motion.a
              href="#services"
              className="inline-block px-8 py-3 bg-accent-cyan text-[#051129] font-bold rounded-lg hover:bg-accent-blue smooth transition-all hover:scale-105 neon-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More About Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
