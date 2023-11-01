import {
  validateCarNames,
  validateTryCount,
} from '../../src/utils/Validation.js';
import { VALIDATION } from '../../src/constants/MESSAGE.js';

describe('자동차이름 확인', () => {
  test('자동차이름 5자 초과 시 에러', () => {
    const invalidName = ['car1', 'car2', 'car3333'];
    expect(() => validateCarNames(invalidName)).toThrowError(
      VALIDATION.NAME_LENGTH
    );
  });

  test('자동차 이름이 2개 미만일 시 에러', () => {
    const invalidName = ['car1'];
    expect(() => validateCarNames(invalidName)).toThrowError(
      VALIDATION.CAR_COUNT
    );
  });
});

describe('시도횟수 확인', () => {
  test('시도 횟수가 숫자가 아닐 시 에러', () => {
    const inccorectCount = 'abc';
    expect(() => validateTryCount(inccorectCount)).toThrowError(
      VALIDATION.TRY_COUNT
    );
  });

  test('시도 횟수가 빈 문자열이면 에러', () => {
    const empty = '';
    expect(() => validateTryCount(empty)).toThrowError(VALIDATION.TRY_COUNT);
  });
});
