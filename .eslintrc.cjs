module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'import/extensions': ['off'],
    // 들여쓰기 깊이 제한
    'max-depth': ['error', 2],
  },
};
