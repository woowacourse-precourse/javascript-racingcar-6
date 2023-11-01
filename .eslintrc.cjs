module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // 공백 문자 호환 설정
    'operator-linebreak': ['error', 'before'], // 할당 연산자 줄바꿈 설정
    'max-depth': ['error', 2], // 들여쓰기 깊이(depth) 제한 (2주차 미션 요구 사항)
  },
};
