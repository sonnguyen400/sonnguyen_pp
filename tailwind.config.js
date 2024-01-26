/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        "./node_modules/tw-elements-react/dist/js/**/*.js",
    ],
    theme: {
        extend: {},
        screens: {
            ssm: '300px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        }
        ,
        // textColor: {
        //     light: '#fff',
        //     'sub-light': '#fffcce',
        //     dark: '#3C3C3C',
        //     'sub-dark': '#454249',
        //     subject: '#07689F',
        //     'sub-subject': '#5A96E3',
        // },
        // backgroundColor: {
        //     subject: '#344FA1',
        //     sub: '#8AB6D6',
        //     vioblue: '#3468C0',
        // },
    },
    plugins: []
};
