module.exports = {
  purge: {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2160px',
      '5xl': '2560px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgba(209, 213, 219)',
            a: {
              color: 'rgba(129, 140, 248)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            strong: {
              color: 'rgba(209, 213, 219)',
            },
            h3: {
              color: 'rgba(209, 213, 219)',
            },
            h4: {
              color: 'rgba(209, 213, 219)',
            },
            h5: {
              color: 'rgba(209, 213, 219)',
            },
            code: {
              color: '#ec4899',
            },
          },
        },
      },
    },
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
}
