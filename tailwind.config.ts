import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00FFFF',
        'neon-pink': '#FF00FF',
        'neon-orange': '#FF9900',
        'vaporwave-dark': '#0a0e27',
        'vaporwave-purple': '#1a0033',
      },
      boxShadow: {
        'neon-cyan': '0 0 12px 2px rgba(0, 255, 255, 0.8), 0 0 24px 4px rgba(0, 255, 255, 0.4)',
        'neon-pink': '0 0 12px 2px rgba(255, 0, 255, 0.8), 0 0 24px 4px rgba(255, 0, 255, 0.4)',
        'neon-orange': '0 0 12px 2px rgba(255, 153, 0, 0.8), 0 0 24px 4px rgba(255, 153, 0, 0.4)',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'grid-animation': 'grid-animation 8s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 0.15s infinite',
      },
      keyframes: {
        'grid-animation': {
          '0%': { backgroundPosition: '0 0, 0 0' },
          '100%': { backgroundPosition: '60px 60px, 60px 60px' },
        },
        'glow-pulse': {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' },
          '50%': {
            textShadow:
              '0 0 20px rgba(0, 255, 255, 0.9), 0 0 30px rgba(255, 0, 255, 0.6)',
          },
        },
        'neon-flicker': {
          '0%': { opacity: '0.95' },
          '5%': { opacity: '0.8' },
          '10%': { opacity: '0.95' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss/plugin')],
};

export default config;
