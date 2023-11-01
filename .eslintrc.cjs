module.exports = {
  env: {
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
    'eslint:recommended',
  ],
  overrides: [
    // 테스트 파일에는 규칙 비활성화
    {
      files: ['__tests__/**/*.js'],
      rules: {
        'max-lines-per-function': 'off',
        'no-new': 'off',
      },
    },
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-plusplus': 0,
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'no-process-exit': 'error',
    'max-lines-per-function': ['error', 15],
    'class-methods-use-this': 'off',
    'no-empty-function': 'off',
    'jsdoc/no-undefined-types': 'off',

    // 우테코 요구사항
    'max-depth': ['error', 2],
  },
};
