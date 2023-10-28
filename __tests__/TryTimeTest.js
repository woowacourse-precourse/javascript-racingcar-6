import Validator from '../src/classes/validator';
import { ERROR_MESSAGE } from '../src/constant/message';

describe('시도할 횟수 입력값 테스트', () => {
  test('문자 입력 시 오류 발생', () => {
    expect(() => Validator.isNumber('a')).toThrow(new Error(ERROR_MESSAGE.IS_NOT_NUMBER));
  });

  test('숫자, 문자 입력 시 오류 발생', () => {
    expect(() => Validator.isNumber('1a')).toThrow(new Error(ERROR_MESSAGE.IS_NOT_NUMBER));
  });

  test('음수 입력 시 오류 발생', () => {
    expect(() => Validator.lessThanOne('-1')).toThrow(new Error(ERROR_MESSAGE.LESS_THAN_ONE));
  });

  test('소수 입력 시 오류 발생', () => {
    expect(() => Validator.isInteger('1.2')).toThrow(new Error(ERROR_MESSAGE.IS_NOT_INTEGER));
  })

  test('최대 시도 횟수 초과 시 오류 발생', () => {
    expect(() => Validator.overTryTime('123')).toThrow(new Error(ERROR_MESSAGE.OVER_TRY_TIME));
  })
});
