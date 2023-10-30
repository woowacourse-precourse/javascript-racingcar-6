import Validator from '../src/classes/Validator';
import { ERROR_MESSAGE } from '../src/constant/message';

describe('자동차 이름 입력값 유효성 테스트', () => {
  test('공백 입력 시 에러 반환 테스트', () => {
    expect(() => Validator.emptyInput(' ')).toThrow(new Error(ERROR_MESSAGE.EMPTY_INPUT));
  });

  test('특수문자 포함 시 에러 반환 테스트', () => {
    expect(() => Validator.specialCharactor('!@#')).toThrow(new Error(ERROR_MESSAGE.INVALID_INPUT));
  });

  test('자동차 이름이 2개 이상인지 테스트', () => {
    expect(() => Validator.overTwoNames('abc')).toThrow(new Error(ERROR_MESSAGE.LESS_TWO_NAME));
  });

  test('자동차 이름 길이 초과 테스트', () => {
    expect(() => Validator.nameLength('abcedfg,abc')).toThrow(new Error(ERROR_MESSAGE.OVER_LENGTH_NAME));
  });

  test('최대 자동차 댓수 초과 테스트', () => {
    expect(() => Validator.overMaximumCars('1,2,3,4,5,6,7,8,9')).toThrow(new Error(ERROR_MESSAGE.OVER_MAXIMUM_CARS));
  });
});
