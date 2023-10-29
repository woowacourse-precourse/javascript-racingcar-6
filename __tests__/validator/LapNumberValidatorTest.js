import { LapNumberValidator } from '../../src/validator/index.js';

describe('시행 횟수 유효성 검증 테스트', () => {
  const errorMessage = Object.freeze({
    invalidCharactor: LapNumberValidator.LAPNUMBER_VALIDATION_TYPES.validCharactor.message,
  });

  test.each([
    { input: 'abc', expectError: errorMessage.invalidCharactor },
    { input: 'abc def', expectError: errorMessage.invalidCharactor },
    { input: '123abc', expectError: errorMessage.invalidCharactor },
    { input: 'abc123', expectError: errorMessage.invalidCharactor },
  ])('문자 입력 테스트', ({ input, expectError }) => {
    const lapNumberValidator = new LapNumberValidator(input);
    expect(() => lapNumberValidator.validateLapNumber(input)).toThrow(expectError);
  });
});
