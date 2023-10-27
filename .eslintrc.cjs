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
    // 프리코스 프로그래밍 요구사항
    // https://github.com/solo5star/javascript-lotto#-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%9A%94%EA%B5%AC-%EC%82%AC%ED%95%AD
    'max-depth': ['error', 2],

    // ESM 사용으로 인한 파일 확장자 표기 의무화
    'import/extensions': ['error', 'always', { ignorePackages: true }],

    // JSDoc과 관련된 불필요한 규칙 무시
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',

    // __tests__ 폴더 외에 다른 곳에 테스트 코드 존재롤 인해
    'import/export': 0,
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
