module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:jsdoc/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // 프리코스 프로그래밍 요구사항 보다 -1 (함수 분리를 더 연습하기 위해)
    'max-depth': ['error', 1],

    // ESM 사용으로 인한 파일 확장자 표기 의무화
    'import/extensions': ['error', 'always', { ignorePackages: true }],

    // JSDoc과 관련된 불필요한 규칙 무시
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',

    // __tests__ 폴더 외에 다른 곳에 테스트 코드 존재롤 인해
    'import/export': 0,

    // 실수 방지
    'require-await': 'error',
  },
  overrides: [
    {
      files: ['__tests__/**/*.js', 'src/utils/validator/utils/**/*.js'],
      rules: {
        'max-lines-per-function': 'off',
        'no-new': 'off',
        'no-undef': 'off',
        'arrow-body-style': 'off',
      },
    },
  ],
};
