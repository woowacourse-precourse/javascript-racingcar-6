module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: ['airbnb-base', 'prettier'],
  rules: {
    // 들여쓰기 깊이 제한
    'max-depth': ['error', 2],
  },
};
