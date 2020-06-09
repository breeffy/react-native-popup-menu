module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react-hooks'],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'comma-dangle': 'off',
    'react-native/no-inline-styles': 'off',
    curly: 'off'
  }
};
