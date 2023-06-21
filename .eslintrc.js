module.exports = {
  extends: ['next', 'rtkit/ts', 'rtkit/react', 'react-app/jest', 'plugin:storybook/recommended'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    'testing-library/prefer-screen-queries': 'off',
    '@next/next/no-html-link-for-pages': 'off',
  },
};
