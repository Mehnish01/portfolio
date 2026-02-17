import { Navigation } from './components/ui/Navigation'
import { BackgroundParticles } from './components/3d/BackgroundParticles'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ContactSection } from './components/sections/ContactSection'

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Background Particles */}
      <BackgroundParticles />

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 md:px-12 border-t border-accent-cyan/20 text-center text-text-light">
        <p className="text-sm">
          © 2024 Mehnish Saifi. All rights reserved. Built with Next.js and Three.js
        </p>
      </footer>
    </main>
  )
}
