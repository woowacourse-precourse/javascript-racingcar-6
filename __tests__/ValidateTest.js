import { ERROR } from '../src/constants';
import Validate from '../src/Validate';

describe('validate test', () => {
  test('시도 횟수를 숫자 형식으로 입력하셔야 합니다.', () => {
    expect(() => Validate.inputNumberOfTry('5')).not.toThrow();
    expect(() => Validate.inputNumberOfTry('a')).toThrow(ERROR.NAN);
  });

  test('자동차 이름은 5글자 이내여야 합니다.', () => {
    expect(() => Validate.inputCarName('poni')).not.toThrow();
    expect(() => Validate.inputCarName('samuel')).toThrow(ERROR.OVER_FIVE_LETTERS);
  });
});
