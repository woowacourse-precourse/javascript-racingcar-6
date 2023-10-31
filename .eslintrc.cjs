module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ["docs", "__tests__"],
  rules: {
    // 들여쓰기를 2까지만 허용한다.
    'max-depth': ['error', 2],
    // 안쓰는 변수 에러 발생
    "no-unused-vars": "error",
    // Console.log 사용불가
    "no-console": "error",
    // 표현식을 구분하는 연산자 옆에 줄 바꿈을 삽입
    'operator-linebreak': ['error', 'before'],
    // 함수의 길이 제한 
    'max-lines-per-function': ['error', { max: 15 }],
    'class-methods-use-this': 'warn',
  },
};
