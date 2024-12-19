/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		screens: {
			'xl': '1280px', // Existing Tailwind breakpoint
			'2xl': '1440px', // Existing Tailwind breakpoint
			'3xl': '1552px', // Custom breakpoint
			'4xl': '1792px', // Custom breakpoint
		},
		container: {
			center: true,
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontSize: {
				xs: [
					'0.75rem',
					{
						lineHeight: 'normal'
					}
				],
				sm: [
					'0.875rem',
					{
						lineHeight: 'normal'
					}
				],
				base: [
					'1rem',
					{
						lineHeight: 'normal'
					}
				],
				lg: [
					'1.125rem',
					{
						lineHeight: 'normal'
					}
				],
				xl: [
					'1.25rem',
					{
						lineHeight: 'normal'
					}
				],
				'2xl': [
					'1.5rem',
					{
						lineHeight: 'normal'
					}
				],
				'3xl': [
					'1.875rem',
					{
						lineHeight: 'normal'
					}
				],
				'4xl': [
					'2.25rem',
					{
						lineHeight: 'normal'
					}
				],
				'5xl': [
					'3rem',
					{
						lineHeight: 'normal'
					}
				],
				'6xl': [
					'3.75rem',
					{
						lineHeight: 'normal'
					}
				],
				'7xl': [
					'4.5rem',
					{
						lineHeight: 'normal'
					}
				],
				'8xl': [
					'6rem',
					{
						lineHeight: 'normal'
					}
				],
				'9xl': [
					'8rem',
					{
						lineHeight: 'normal'
					}
				]
			},
			boxShadow: {
				'4xl': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
			}
		}
	},
	plugins: [],
}

