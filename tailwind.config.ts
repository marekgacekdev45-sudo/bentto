import type { Config } from 'tailwindcss'

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '390px',
				max: '2200px',
			},
			colors: {
				primary: {
					400: '#da251d',
				},
				secondary: {
					400: '',
				},
        
			},
		},
	},
	plugins: [],
} satisfies Config
