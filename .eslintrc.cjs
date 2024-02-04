module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends:['airbnb','prettier/react', 'eslint:recommended','plugin:prettier/recommended'],
  // prettier/react 추가
  rules:{
    'react/jsx-filename-extension': 
    ['error', { 'extensions': [".js", ".jsx"] }],
  }
};