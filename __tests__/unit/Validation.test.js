/* eslint-disable max-lines-per-function */
import { isValidCarName, isValidTryCount } from '../../src/common/validator.js';

describe('자동차 이름 유효성 검사', () => {
  const validCarNames = ['Tesla,Volvo', '테슬라,메르세데스', '##,!@#$'];
  const duplicatedCarNames = ['BMW,BMW', '현대,현대', '!@#,!@#'];
  const inValidLengthNames = ['Mercedes,Toyota,Lamborghini', '메르세데스벤츠,에디슨모터스', '!@#$%^, ##@@!!'];
  const inValidNumberNames = ['Ford,', '포드,', '!@#,'];

  test('중복 여부 확인', () => {
    validCarNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(true);
    });

    duplicatedCarNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(false);
    });
  });

  test('5자 이하 여부 확인', () => {
    validCarNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(true);
    });

    inValidLengthNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(false);
    });
  });

  test('쉼표로 구분 여부 확인', () => {
    validCarNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(true);
    });

    inValidNumberNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(false);
    });
  });
});

describe('시도 횟수 유효성 검사', () => {
  test('0부터 9까지 1자리의 숫자로만 입력', () => {
    const validTryCounts = [0, 5, 9];
    const invalidTryCounts = [-1, 10, 'abc', '@'];

    validTryCounts.forEach((tryCount) => {
      expect(isValidTryCount(tryCount)).toBe(true);
    });

    invalidTryCounts.forEach((tryCount) => {
      expect(isValidTryCount(tryCount)).toBe(false);
    });
  });
});
