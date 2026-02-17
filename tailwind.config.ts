import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-cyan': '#00eeff',
        'accent-blue': '#0084ff',
        'bg-dark': '#0f5050',
        'text-light': '#ededed',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f5050, #051129)',
      },
      backdropBlur: {
        md: '12px',
        lg: '16px',
      },
    },
  },
  plugins: [],
}
export default config
