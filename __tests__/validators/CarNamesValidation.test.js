import AppError from '../../src/errors/AppError.js';
import {
  CAR_NAME_VALIDATION_TYPES,
  validateCarNames,
} from '../../src/validations/carNamesValidation.js';

describe('validateCarNames 테스트', () => {
  const startValidation = (carNames) => () => validateCarNames(carNames);

  describe('예외 테스트', () => {
    test.each([
      {
        carNames: ['aaaaaa', 'bbbbbb'],
        expectedErrorMessage:
          CAR_NAME_VALIDATION_TYPES.lengthOfCarName.errorMessage,
      },
      {
        carNames: ['aaa', 'aaa'],
        expectedErrorMessage:
          CAR_NAME_VALIDATION_TYPES.duplicateCarNames.errorMessage,
      },
    ])(
      '입력된 자동차 이름들이 $carNames 일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ carNames, expectedErrorMessage }) => {
        // then
        expect(startValidation(carNames)).toThrow(
          new AppError(expectedErrorMessage),
        );
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        carNames: ['aaa', 'bbb', 'ccc'],
      },
      {
        carNames: ['car1', 'car2'],
      },
    ])(
      '입력된 자동차 이름이 $carNames 일 때 에러가 발생하지 않는다.',
      ({ carNames }) => {
        // then
        expect(startValidation(carNames)).not.toThrow();
      },
    );
  });
});
