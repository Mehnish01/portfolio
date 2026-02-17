'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-20 px-6 md:px-12 z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-accent-cyan">Me</span>
          </h1>
          <p className="text-lg text-text-light mt-4">
            Let's work together on something amazing
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glass-panel p-8 md:p-12 rounded-xl neon-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[rgba(15,80,80,0.3)] border border-accent-cyan/30 rounded-lg text-text-light placeholder-gray-500 focus:outline-none focus:border-accent-cyan smooth transition-colors"
                placeholder="Enter your name"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[rgba(15,80,80,0.3)] border border-accent-cyan/30 rounded-lg text-text-light placeholder-gray-500 focus:outline-none focus:border-accent-cyan smooth transition-colors"
                placeholder="Enter your email"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[rgba(15,80,80,0.3)] border border-accent-cyan/30 rounded-lg text-text-light placeholder-gray-500 focus:outline-none focus:border-accent-cyan smooth transition-colors resize-none"
                placeholder="Write your message here"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full px-8 py-3 bg-accent-cyan text-[#051129] font-bold rounded-lg hover:bg-accent-blue smooth transition-all neon-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Send Message
            </motion.button>

            {/* Success Message */}
            {submitted && (
              <motion.div
                className="p-4 bg-accent-cyan/10 border border-accent-cyan rounded-lg text-accent-cyan text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </form>

          {/* Contact Info */}
          <motion.div
            className="mt-12 pt-8 border-t border-accent-cyan/20 grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="font-semibold text-accent-cyan mb-2">Email</h4>
              <a
                href="mailto:mehnish@example.com"
                className="text-text-light hover:text-accent-cyan smooth transition-colors"
              >
                mehnish@example.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-accent-cyan mb-2">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/mehnish-saifi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-accent-cyan smooth transition-colors"
              >
                linkedin.com/in/mehnish-saifi
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
