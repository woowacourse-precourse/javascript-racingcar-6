/* eslint-disable max-lines-per-function */
import isValidCarName from '../../src/common/utils/carNameValidator';
import isValidTryNumber from '../../src/common/utils/tryNumberValidator';

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
    const validTryNumbers = [0, 5, 9];
    const invalidTryNumbers = [-1, 10, 'abc', '@'];

    validTryNumbers.forEach((tryNumber) => {
      expect(isValidTryNumber(tryNumber)).toBe(true);
    });

    invalidTryNumbers.forEach((tryNumber) => {
      expect(isValidTryNumber(tryNumber)).toBe(false);
    });
  });
});
