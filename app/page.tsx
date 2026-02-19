'use client'

import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <Navigation />
      <section className="h-screen flex items-center justify-center bg-background">
        <h1 className="text-5xl font-bold text-primary">Welcome</h1>
      </section>
    </main>
  )
}
