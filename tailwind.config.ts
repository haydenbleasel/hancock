import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@beskar-labs/gravity/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
