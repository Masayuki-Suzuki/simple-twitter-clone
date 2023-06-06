const TwitterColours = {
    blue: '#1d9cf0',
    lightBlue: '#e8f8fe',
    background: '#e6ecf0'
}

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
        colors: {
            'tw-blue': TwitterColours.blue,
            'tw-light-blue': TwitterColours.lightBlue
        },
        backgroundColor: {
            primary: TwitterColours.background,
            'tw-blue': TwitterColours.blue,
            'tw-light-blue': TwitterColours.lightBlue
        },
        borderColor: {
            'tw-gray': TwitterColours.background
        }
    },
  },
  plugins: [],
}

