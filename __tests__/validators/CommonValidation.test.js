import AppError from '../../src/errors/AppError.js';
import {
  COMMON_VALIDATION_TYPES,
  validateCommon,
} from '../../src/validations/commonValidation.js';

describe('validateCommon 테스트', () => {
  const startValidation = (inputValue) => () => validateCommon(inputValue);
  describe('예외 테스트', () => {
    test.each([
      {
        inputValue: '',
        expectedErrorMessage: COMMON_VALIDATION_TYPES.emptyValues.errorMessage,
      },
      {
        inputValue: 'Some text with space',
        expectedErrorMessage: COMMON_VALIDATION_TYPES.existSpaces.errorMessage,
      },
    ])(
      '입력값이 "$inputValue"일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ inputValue, expectedErrorMessage }) => {
        // then
        expect(startValidation(inputValue)).toThrow(
          new AppError(expectedErrorMessage),
        );
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        inputValue: 'abc',
      },
      {
        inputValue: '123',
      },
    ])(
      '입력값이 "$inputValue"일 때 에러가 발생하지 않는다.',
      ({ inputValue }) => {
        // then
        expect(startValidation(inputValue)).not.toThrow();
      },
    );
  });
});
