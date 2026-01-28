import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#734F9C',
        'neon-pink': '#C47BB4',
        'neon-orange': '#B59FD6',
        'primary-purple': '#734F9C',
        'secondary-pink': '#C47BB4',
        'background-light': '#9F9CCB',
      },
      boxShadow: {
        'neon-cyan': '0 2px 8px rgba(115, 79, 156, 0.15)',
        'neon-pink': '0 2px 8px rgba(196, 123, 180, 0.15)',
        'neon-orange': '0 2px 8px rgba(181, 159, 214, 0.15)',
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
          '100%': { backgroundPosition: '0 0, 0 0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': {
            opacity: '0.8',
          },
        },
        'neon-flicker': {
          '0%': { opacity: '1' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss/plugin')],
};

export default config;
