module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/Snap7.jpg')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // other plugins as needed
  ],
  corePlugins: {
    // Enable the @layer directive
    // See: https://tailwindcss.com/docs/just-in-time-mode#enabling-the-layer-directive
    '@layer': true,
    },
    // Enable JIT mode
    // See: https://tailwindcss.com/docs/just-in-time-mode
  mode: 'jit',
};
