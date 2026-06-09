import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#070A14',
        panel: '#0F172A',
        border: '#2A2F4A',
        primary: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA'
        },
        accent: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#6366F1'
        }
      },
      boxShadow: {
        soft: '0 20px 80px rgba(15, 23, 42, 0.35)'
      },
      backgroundImage: {
        glass: 'radial-gradient(circle at top left, rgba(139,92,246,0.24), transparent 35%), radial-gradient(circle at bottom right, rgba(59,130,246,0.18), transparent 30%), linear-gradient(180deg, rgba(15,23,42,0.92), rgba(7,10,20,0.96))'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
