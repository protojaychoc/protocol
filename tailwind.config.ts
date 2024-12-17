import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: ['var(--font-geist-sans)'],
		  },
		  screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			desktop: '1440px',
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
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
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  spacing: {
			'theme-wide': '115rem'
		  },
		  keyframes: {
			slideIn: {
			  "0%": { transform: "translateX(100%)" },
			  "100%": { transform: "translateX(0)" },
			},
			slideOut: {
			  "0%": { transform: "translateX(0)" },
			  "100%": { transform: "translateX(100%)" },
			},
			fadeIn: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' },
			  },
			  fadeOut: {
				'0%': { opacity: '1' },
				'100%': { opacity: '0' },
			  },
		  },
		  animation: {
			slideIn: "slideIn 0.5s ease-out",
			slideOut: "slideOut 0.5s ease-in",
			fadeIn: 'fadeIn 0.2s ease-in',
  			fadeOut: 'fadeOut 0.2s ease-out',
		  },
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
],
} satisfies Config;
