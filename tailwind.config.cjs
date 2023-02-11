/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
				mono: ['Ubuntu Mono', ...defaultTheme.fontFamily.mono]
			},
    },
  },
  plugins: [],
  darkMode: ['class'],
}
