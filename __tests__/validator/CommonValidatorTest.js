import CommonValidator from '../../src/validator/CommonValidator.js';

describe('공통 유효성 검증 테스트', () => {
  const errorMessage = Object.freeze({
    emptyInput: CommonValidator.COMMON_VALIDATION_TYPES.emptyInput.message,
  });

  test.each([
    { input: '', expectError: errorMessage.emptyInput },
    { input: '  ', expectError: errorMessage.emptyInput },
    { input: '   ', expectError: errorMessage.emptyInput },
    { input: '    ', expectError: errorMessage.emptyInput },
  ])('공백 입력 테스트', ({ input, expectError }) => {
    const commonValidator = new CommonValidator(input);
    expect(() => commonValidator.validate(input)).toThrow(expectError);
  });
});
