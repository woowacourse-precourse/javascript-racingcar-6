import InputValidator from '../../src/utils/InputValidator';
import { ErrorMessages } from '../../src/constants/ErrorMessages';

describe('InputValidator 클래스', () => {
  describe('validateCarName 메서드', () => {
    test('이름이 5자 이상일 경우 에러를 던져야 한다', () => {
      const invalidName = 'abcdef';
      expect(() => InputValidator.validateCarName(invalidName)).toThrow(
        ErrorMessages.INVALID_NAME_LENGTH
      );
    });

    test('이름이 빈 문자열이거나 null일 경우 에러를 던져야 한다', () => {
      expect(() => InputValidator.validateCarName('')).toThrow(ErrorMessages.INVALID_NAME_EMPTY);
      expect(() => InputValidator.validateCarName(null)).toThrow(ErrorMessages.INVALID_NAME_EMPTY);
    });

    test('이름이 유효할 경우 에러를 던지지 않아야 한다', () => {
      expect(() => InputValidator.validateCarName('abc')).not.toThrow();
    });
  });

  describe('validateNumberOfRounds 메서드', () => {
    test('라운드 수가 0 이하일 경우 에러를 던져야 한다', () => {
      expect(() => InputValidator.validateNumberOfRounds(0)).toThrow(
        ErrorMessages.INVALID_ROUND_NUMBER
      );
      expect(() => InputValidator.validateNumberOfRounds(-1)).toThrow(
        ErrorMessages.INVALID_ROUND_NUMBER
      );
    });

    test('라운드 수가 1 이상일 경우 에러를 던지지 않아야 한다', () => {
      expect(() => InputValidator.validateNumberOfRounds(1)).not.toThrow();
      expect(() => InputValidator.validateNumberOfRounds(5)).not.toThrow();
    });
  });

  describe('validateNumberOfCars 메서드', () => {
    test('자동차 수가 1대일 경우 에러를 던져야 한다', () => {
      expect(() => InputValidator.validateNumberOfCars(1)).toThrow(
        ErrorMessages.INVALID_NUMBER_OF_CARS
      );
    });

    test('자동차 수가 2대 미만일 경우 에러를 던져야 한다', () => {
      expect(() => InputValidator.validateNumberOfCars(0)).toThrow(
        ErrorMessages.INVALID_NUMBER_OF_CARS
      );
    });

    test('자동차 수가 2대 이상일 경우 에러를 던지지 않아야 한다', () => {
      expect(() => InputValidator.validateNumberOfCars(2)).not.toThrow();
      expect(() => InputValidator.validateNumberOfCars(5)).not.toThrow();
    });
  });
});
