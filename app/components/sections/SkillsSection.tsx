'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SkillsSphereSection } from '../3d/SkillsSphere'

const technicalSkills = [
  {
    category: 'Languages',
    skills: [
      { name: 'HTML', percentage: 90 },
      { name: 'CSS', percentage: 85 },
      { name: 'JavaScript', percentage: 70 },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React', percentage: 70 },
      { name: 'Angular', percentage: 70 },
      { name: 'Bootstrap', percentage: 80 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', percentage: 75 },
      { name: 'VS Code', percentage: 90 },
      { name: 'Figma', percentage: 90 },
    ],
  },
]

const professionalSkills = [
  { name: 'Creativity', percentage: 90 },
  { name: 'Communication', percentage: 85 },
  { name: 'Problem Solving', percentage: 75 },
  { name: 'Teamwork', percentage: 85 },
]

export function SkillsSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-20 px-6 md:px-12 z-10"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Technical <span className="text-accent-cyan">Skills</span>
          </h1>
        </motion.div>

        {/* 3D Skills Sphere */}
        {isClient && (
          <motion.div
            className="h-96 mb-16 rounded-xl overflow-hidden glass-panel neon-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SkillsSphereSection />
          </motion.div>
        )}

        {/* Technical Skills */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {technicalSkills.map((skillGroup, groupIdx) => (
            <motion.div
              key={groupIdx}
              className="glass-panel p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIdx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-accent-cyan">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-accent-cyan">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-accent-cyan to-accent-blue h-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 0.8, delay: skillIdx * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Professional <span className="text-accent-cyan">Skills</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {professionalSkills.map((skill, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="4"
                    />
                    {/* Progress circle */}
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 50}
                      initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                      whileInView={{
                        strokeDashoffset:
                          2 * Math.PI * 50 - (skill.percentage / 100) * 2 * Math.PI * 50,
                      }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00eeff" />
                        <stop offset="100%" stopColor="#0084ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-cyan">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
                <p className="text-center font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
