// tailwind.config.js
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: {
          black: '#000000',
          white: '#ffffff',
          green: '#08c294',
          blue: '#79a1f7',
          violet: '#ba9af7',
          red: '#f7768e',
          orange: '#ff9e63',
        },
        light: {
          black: '#ffffff', // Cambia el negro para el tema claro
          white: '#000000', // Cambia el blanco para el tema claro
          green: '#ba9af7', // Puedes ajustar los colores según el tema claro
          blue: '#ff9e63',
          violet: '#08c294',
          red: '#e74c3c',
          orange: '#79a1f7',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
