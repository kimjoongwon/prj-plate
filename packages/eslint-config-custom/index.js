module.exports = {
  extends: ['next', 'turbo', 'airbnb', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    'react/no-unstable-nested-components': 'off',
    'react/jsx-filename-extension': 'off', // Next.js uses `.tsx` files.
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-undef': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
  },
};
