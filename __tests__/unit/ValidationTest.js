/* eslint-disable max-lines-per-function */
import { isValidCarName, isValidTryCount } from '../../src/common/validator.js';

describe('자동차 이름 유효성 검사', () => {
  const validCarNames = ['Tesla,Volvo', '테슬라,메르세데스', '##,!@#$'];
  const duplicatedCarNames = ['BMW,BMW', '현대,현대', '!@#,!@#'];
  const invalidLengthNames = ['Mercedes,Toyota,Lamborghini', '메르세데스벤츠,에디슨모터스', '!@#$%^, ##@@!!'];
  const invalidCountNames = ['Ford,', '포드,', '!@#,'];

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

    invalidLengthNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(false);
    });
  });

  test('쉼표로 구분 여부 확인', () => {
    validCarNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(true);
    });

    invalidCountNames.forEach((carNames) => {
      expect(isValidCarName(carNames)).toBe(false);
    });
  });
});

describe('시도 횟수 유효성 검사', () => {
  test('1 이상의 정수로만 입력', () => {
    const validTryCounts = [1, 5, 99];
    const invalidTryCounts = [-1, 'abc', '@'];

    validTryCounts.forEach((tryCount) => {
      expect(isValidTryCount(tryCount)).toBe(true);
    });

    invalidTryCounts.forEach((tryCount) => {
      expect(isValidTryCount(tryCount)).toBe(false);
    });
  });
});
