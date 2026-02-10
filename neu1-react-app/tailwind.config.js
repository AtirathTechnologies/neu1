/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0B5ED7',
        'accent': '#2BB0FF',
        'dark': '#0A1A2F',
        'dark-secondary': '#0E2F4F',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'modal-pop-in': 'modalPopIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'modal-pop-out': 'modalPopOut 0.5s ease-out forwards',
        'gallery-slide': 'gallerySlide 60s linear infinite',
        'gallery-slide-reverse': 'gallerySlideReverse 60s linear infinite',
        'call-pulse': 'callPulse 2s ease-in-out infinite',
        'whatsapp-pulse': 'whatsappPulse 2s ease-in-out infinite',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
}