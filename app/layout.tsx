import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mehnish Saifi - 3D Interactive Portfolio',
  description: 'Android & Web Developer with 2 years of experience. Interactive 3D portfolio showcasing skills in mobile and web development.',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor: '#00eeff',
  openGraph: {
    title: 'Mehnish Saifi - 3D Interactive Portfolio',
    description: 'Explore my work in Android development, web development, and UI/UX design.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){emailjs.init("HNEevHXTGlMW4KsGP");})();`,
          }}
        />
      </head>
      <body className="relative bg-gradient-dark text-text-light">
        {children}
      </body>
    </html>
  )
}
