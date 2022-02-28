module.exports = {
	purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				sm: '.9375rem',
				xl: '1.375rem',
			},
			borderRadius: {
				'2.5xl': '1.25rem',
			},
			spacing: {
				full: '100%',
			},
		},
		fontFamily: {
			primary: ['Outfit', 'sans-serif'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: 'hsl(0, 0%, 0%)',
			white: 'hsl(0, 0%, 100%)',
			'light-gray': 'hsl(212, 45%, 89%)',
			'grayish-blue': 'hsl(220, 15%, 55%)',
			'dark-blue': 'hsl(218, 44%, 22%)',
		},
		variants: {
			extend: {},
		},
		plugins: [],
	},
};
