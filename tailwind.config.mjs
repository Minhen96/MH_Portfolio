/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Luxurious Navy & Platinum palette
        portfolio: {
          // Primary luxury colors
          navy: '#1E40AF',        // Deep sapphire navy - main luxury accent
          'navy-dark': '#1E3A8A', // Darker navy
          'navy-light': '#3B82F6', // Lighter blue

          platinum: '#E5E7EB',    // Platinum silver - secondary luxury accent
          'platinum-dark': '#D1D5DB', // Darker platinum
          'platinum-light': '#F3F4F6', // Lighter platinum

          silver: '#94A3B8',      // Elegant silver
          'silver-dark': '#64748B', // Darker silver

          // Additional luxury accents
          slate: '#475569',       // Refined slate
          indigo: '#4F46E5',      // Rich indigo

          // Majestic gradients
          'royal-blue': '#2563EB',
          'steel': '#71717A',

          // Legacy colors (keeping for compatibility)
          gold: '#D4AF37',
          teal: '#14B8A6',
          coral: '#FF6B6B',
          mint: '#4ECDC4',
          mustard: '#FFD93D',
          peach: '#FFB4A2',
          'off-white': '#F8F9FA',
        },
        // Technical/code colors
        code: {
          bg: '#1E1E1E',
          comment: '#6A9955',
          keyword: '#569CD6',
          string: '#CE9178',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(78, 205, 196, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(78, 205, 196, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
