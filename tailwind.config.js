module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
        display: ['Inconsolata', 'monospace'],
        body: ['Inconsolata', 'monospace'],
        },
        extend: {
        fontSize: {
            14: '14px',
        },
        backgroundColor: {
            'main-bg': '#FAFBFB',
            'main-dark-bg': '#15181f',
            'secondary-dark-bg': '#2d3a52',
            'light-gray': '#dbd9d9',
            'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
            1: '1px',
        },
        borderColor: {
            color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
            400: '400px',
            760: '760px',
            780: '780px',
            800: '800px',
            1000: '1000px',
            1200: '1200px',
            1400: '1400px',
        },
        height: {
            80: '80px',
        },
        minHeight: {
            590: '590px',
        },
        backgroundImage: {
            'hero-pattern': "url('../src/data/bg1.jpg')",
            'switch': "url('../src/data/bg.jpg')",
        },
        },
    },
    plugins: [],
    };