import ErrorMessage from '../src/ErrorMessage.js';
import Validator from '../src/Validator.js';

describe('ValidatorTest', () => {
  test('자동차 이름이 빈 값일 경우 EMPTY 에러 발생', () => {
    expect(() => Validator.validateCarNames([''])).toThrow(ErrorMessage.EMPTY);
  });
  test('자동차 이름이 빈 값이 아닐 경우 에러 발생하지 않음', () => {
    expect(() => Validator.validateCarNames(['jerry'])).not.toThrow();
    expect(() => Validator.validateCarNames(['jerry', 'tom'])).not.toThrow();
  });
});
