module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
  },
};
