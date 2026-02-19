'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="w-full bg-background border-t border-primary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Mehnish
            </h3>
            <p className="text-foreground/60">
              Creative developer crafting beautiful digital experiences
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {['GitHub', 'LinkedIn', 'Twitter', 'Resume'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-foreground/60 text-sm"
            variants={itemVariants}
          >
            © {currentYear} Mehnish. All rights reserved.
          </motion.p>

          <motion.div
            className="flex gap-4"
            variants={containerVariants}
          >
            {['Privacy', 'Terms', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-foreground/60 hover:text-primary text-sm transition-colors"
                variants={itemVariants}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            className="text-foreground/60 text-sm"
            variants={itemVariants}
          >
            Built with <span className="text-primary">React</span> & <span className="text-secondary">Three.js</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
