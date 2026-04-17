/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0F',
          warm: '#0E0E18',
        },
        surface: {
          DEFAULT: '#14141F',
          hover: '#1E1E2E',
          border: 'rgba(255,255,255,0.08)',
        },
        ink: {
          DEFAULT: '#F0F0F5',
          soft: '#8888A0',
          muted: '#55556A',
        },
        accent: {
          DEFAULT: '#7C5CFC',
          hover: '#9B7FFF',
          glow: 'rgba(124,92,252,0.15)',
          dim: 'rgba(124,92,252,0.08)',
        },
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        card: '0 0 0 1px rgba(255,255,255,0.06)',
        'card-hover': '0 0 0 1px rgba(124,92,252,0.3), 0 8px 40px rgba(124,92,252,0.1)',
        glow: '0 0 30px rgba(124,92,252,0.2)',
        'glow-lg': '0 0 60px rgba(124,92,252,0.3)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
