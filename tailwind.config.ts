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
        customColor: '#ff9e63',
        green: '#08c294',
        blue: '#79a1f7',
        violet: '#ba9af7',
        red: '#f7768e',
        orange: '#ff9e63',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
