/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['DM Mono', ...defaultTheme.fontFamily.mono],
				mono2: ['Major Mono Display', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: [],
	darkMode: ['class']
};
