/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--tw-border))',
        input: 'hsl(var(--tw-input))',
        ring: 'hsl(var(--tw-ring))',
        background: 'hsl(var(--tw-background))',
        foreground: 'hsl(var(--tw-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--tw-primary))',
          foreground: 'hsl(var(--tw-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--tw-secondary))',
          foreground: 'hsl(var(--tw-secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--tw-destructive))',
          foreground: 'hsl(var(--tw-destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--tw-muted))',
          foreground: 'hsl(var(--tw-muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--tw-accent))',
          foreground: 'hsl(var(--tw-accent-foreground))',
        },
      },
    },
  },
  plugins: [],
};
