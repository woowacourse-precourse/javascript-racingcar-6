import { GRANDPRIX_ERROR_NOTIFICATION } from '../../src/constants/GrandPrixError.js';
import { validateLapNumber } from '../../src/validator/index.js';

describe('시행 횟수 유효성 검증 테스트', () => {
  const expectErrorMessage = Object.freeze({
    invalidCharactor: GRANDPRIX_ERROR_NOTIFICATION.invalidCharactor,
    invalidNumber: GRANDPRIX_ERROR_NOTIFICATION.invalidNumber,
    invalidInteger: GRANDPRIX_ERROR_NOTIFICATION.invalidInteger,
  });

  // given
  test.each([
    { input: 'abc', expectError: expectErrorMessage.invalidCharactor },
    { input: 'abc def', expectError: expectErrorMessage.invalidCharactor },
    { input: '123abc', expectError: expectErrorMessage.invalidCharactor },
    { input: 'abc123', expectError: expectErrorMessage.invalidCharactor },
    { input: '1.02', expectError: expectErrorMessage.invalidNumber },
    { input: '-19.1', expectError: expectErrorMessage.invalidNumber },
    { input: '-19', expectError: expectErrorMessage.invalidInteger },
    { input: '-21', expectError: expectErrorMessage.invalidInteger },
  ])('문자 입력 테스트', ({ input, expectError }) => {
    // when & then
    expect(() => validateLapNumber(input)).toThrow(expectError);
  });
});
