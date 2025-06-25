
  tailwind.config = {
    darkMode: 'class',
    theme: {
      fontFamily: { sans: ['Poppins', 'sans-serif'] },
      extend: {
        animation: {
          'fade-in-up': 'fadeInUp 0.8s ease-out both',
          'slide-in-left': 'slideInLeft 0.8s ease-out both',
          'slide-in-right': 'slideInRight 0.8s ease-out both',
          'zoom-in': 'zoomIn 0.8s ease-out both'
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
          },
          slideInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' }
          },
          slideInRight: {
            '0%': { opacity: '0', transform: 'translateX(50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' }
          },
          zoomIn: {
            '0%': { opacity: '0', transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' }
          }
        }
      }
    }
  }
