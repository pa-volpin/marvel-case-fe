module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors: {
         primary: '#202020',
         secondary: '#ec1d24'
       },
       keyframes: {
        'fade-out': {
          '0%': {
            opacity: '1',
            transform: 'translate(0%)'
          },
          '100%': {
            opacity: '0',
            transform: 'translate(100%)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translate(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0%)'
          }
        },
        'loading-1': {
          '0%': { opacity: '0' },
          '20%': { opacity: '0.2' },
          '40%': { opacity: '0.2' },
          '60%': { opacity: '0.2' },
          '80%': { opacity: '0.2' },
          '100%': { opacity: '0.2' },
        },
        'loading-2': {
          '0%': { opacity: '0' },
          '20%': { opacity: '0' },
          '40%': { opacity: '0.4' },
          '60%': { opacity: '0.4' },
          '80%': { opacity: '0.4' },
          '100%': { opacity: '0.4' },
        },
        'loading-3': {
          '0%': { opacity: '0' },
          '20%': { opacity: '0' },
          '40%': { opacity: '0' },
          '60%': { opacity: '0.6' },
          '80%': { opacity: '0.6' },
          '100%': { opacity: '0.6' },
        },
        'loading-4': {
          '0%': { opacity: '0' },
          '20%': { opacity: '0' },
          '40%': { opacity: '0' },
          '60%': { opacity: '0' },
          '80%': { opacity: '0.8' },
          '100%': { opacity: '0.8' },
        },
        'loading-5': {
          '0%': { opacity: '0' },
          '20%': { opacity: '0' },
          '40%': { opacity: '0' },
          '60%': { opacity: '0' },
          '80%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-out': 'fade-out 1s ease-in-out',
        'fade-in': 'fade-in 1s ease-in-out',
        'loading-1': 'loading-1 0.8s ease-in-out infinite',
        'loading-2': 'loading-2 0.8s ease-in-out infinite',
        'loading-3': 'loading-3 0.8s ease-in-out infinite',
        'loading-4': 'loading-4 0.8s ease-in-out infinite',
        'loading-5': 'loading-5 0.8s ease-in-out infinite',
      }
     },
   },
   variants: {
     extend: {
      whitespace: ['hover'],
      overflow: ['hover'],
     },
   },
   plugins: []
 }