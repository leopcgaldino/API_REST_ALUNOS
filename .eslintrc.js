module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/first': 'off',
    'spaced-comment': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-undef': 'off',
    camelcase: 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
  },
};
