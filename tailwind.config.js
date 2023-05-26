/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#fe5332',
        'secondary': '#fc8b02' ,
        'terciary': '#fff11a',
        'quartenary': '#d55957',

      },
      fontFamily: {
        'roboto': ['roboto','ui-sans-serif', 'system-ui'],
        'segoe': ["Segoe UI"],
      },
      screens: {
        'ssm': '330px',
        'sm': '390px',
        'xsm': '450px',
        'md': '600px',
        'mini-tela': '770px',
        'tela': '890px',
        'mxl': '1000px'
      },
    }
  },
  plugins: [],
}
