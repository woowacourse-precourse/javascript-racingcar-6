import Validator from '../src/utils/Validator.js';

describe('Validator', () => {
  test('자동차 이름 유효성 검사', () => {
    expect(() => Validator.validateCarNames(['a,a,b'])).toThrow();
    expect(() => Validator.validateCarNames(['abcdefg'])).toThrow();
    expect(() => Validator.validateBlank(['a, ,c'])).toThrow();
  });

  test('시도 횟수 유효성 검사', () => {
    expect(() => Validator.validateNumber('-1')).toThrow();
    expect(() => Validator.validateNumber('a')).toThrow();
  });
});
