'use client'

import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
