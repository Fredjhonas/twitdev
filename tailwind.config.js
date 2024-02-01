const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            screens: {
            '2xl': '1400px',
            },
        },
        extend: {},
    },
    plugins: [],
});