const TwitterColours = {
    blue: '#1d9cf0',
    lightBlue: '#e8f8fe',
    background: '#eff3f4',
    backgroundLite: '#f7f9f9',
    darkGray: '#536471'
}

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
        colors: {
            'tw-blue': TwitterColours.blue,
            'tw-light-blue': TwitterColours.lightBlue,
            'tw-bg-lite': TwitterColours.backgroundLite,
            'tw-dark-gray': TwitterColours.darkGray
        },
        backgroundColor: {
            secondary: TwitterColours.background,
            'tw-blue': TwitterColours.blue,
            'tw-light-blue': TwitterColours.lightBlue,
            'tw-bg-lite': TwitterColours.backgroundLite
        },
        borderColor: {
            'tw-gray': TwitterColours.background,
            'tw-bg-lite': TwitterColours.backgroundLite
        },
        fontSize: {
            'widget-title': ['1.25rem', {
                lineHeight: 1.2,
                fontWeight: 800
            }],
            'emphasise': ['0.9375rem', {
                lineHeight: 1.3,
                fontWeight: 600
            }],
            'trend-caption': ['0.8125rem', {
                lineHeight: 1.3,
                fontWeight: 400
            }],
            'body': ['0.9375rem', {
                lineHeight: 1.2,
                fontWeight: 400
            }]
        }
    },
  },
  plugins: [],
}

