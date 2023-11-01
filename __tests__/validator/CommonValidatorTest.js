import { GRANDPRIX_ERROR_NOTIFICATION } from '../../src/constants/GrandPrixError.js';
import validateCommon from '../../src/validator/CommonValidator.js';

describe('공통 유효성 검증 테스트', () => {
  const expectErrorMessage = Object.freeze({
    emptyInput: GRANDPRIX_ERROR_NOTIFICATION.emptyInput,
  });

  // given
  test.each([
    { input: '', expectError: expectErrorMessage.emptyInput },
    { input: '  ', expectError: expectErrorMessage.emptyInput },
    { input: '   ', expectError: expectErrorMessage.emptyInput },
    { input: '    ', expectError: expectErrorMessage.emptyInput },
  ])('공백 입력 테스트', ({ input, expectError }) => {
    // when & then
    expect(() => validateCommon(input)).toThrow(expectError);
  });
});
