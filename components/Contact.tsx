'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

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
    <section id="contact" className="w-full py-20 px-6 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            Have a project in mind? Let&apos;s create something amazing together
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={containerVariants}>
            {[
              { label: 'Email', value: 'hello@mehnish.dev', icon: '✉' },
              { label: 'Phone', value: '+1 (555) 123-4567', icon: '📱' },
              { label: 'Location', value: 'San Francisco, CA', icon: '📍' },
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex gap-4">
                <span className="text-2xl text-primary">{item.icon}</span>
                <div>
                  <p className="text-sm text-foreground/60">{item.label}</p>
                  <p className="text-foreground font-semibold">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-primary/20">
              <p className="text-sm text-foreground/60 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {['Github', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.1, borderColor: 'rgb(0, 217, 255)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social[0]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <label className="block text-sm text-foreground/80 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm text-foreground/80 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm text-foreground/80 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message here..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>

            {submitted && (
              <motion.p
                className="text-center text-secondary text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
