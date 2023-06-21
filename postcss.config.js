module.exports = {
  plugins: [
    [
      '@csstools/postcss-global-data',
      {
        files: ['styles/breakpoints.css', 'styles/variables.css'],
      },
    ],
    ['postcss-preset-env', { stage: 2 }],
  ],
};
