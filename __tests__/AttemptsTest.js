import ValidateAttempt from '../src/Validator/ValidateAttempt.js';

describe('시도 횟수 검증 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new ValidateAttempt();
  });

  test('숫자만 입력했을 경우', () => {
    const attempt = 20;
    expect(() => validator.isValidAttempt(attempt)).not.toThrow();
  });

  test('숫자와 문자를 함께 입력했을 경우', () => {
    const attempt = 'pobi123';
    expect(() => validator.isValidAttempt(attempt)).toThrow('[ERROR] 숫자만 입력 가능합니다.');
  });

  test('문자를 입력했을 경우', () => {
    const attempt = 'wonijun';
    expect(() => validator.isValidAttempt(attempt)).toThrow('[ERROR] 숫자만 입력 가능합니다.');
  });
});
