import { GRANDPRIX_ERROR_NOTIFICATION } from '../../src/constants/GrandPrixError.js';
import { validateLapNumber } from '../../src/validator/index.js';

describe('시행 횟수 유효성 검증 테스트', () => {
  const expectErrorMessage = Object.freeze({
    invalidCharactor: GRANDPRIX_ERROR_NOTIFICATION.invalidCharactor,
  });

  test.each([
    { input: 'abc', expectError: expectErrorMessage.invalidCharactor },
    { input: 'abc def', expectError: expectErrorMessage.invalidCharactor },
    { input: '123abc', expectError: expectErrorMessage.invalidCharactor },
    { input: 'abc123', expectError: expectErrorMessage.invalidCharactor },
  ])('문자 입력 테스트', ({ input, expectError }) => {
    expect(() => validateLapNumber(input)).toThrow(expectError);
  });
});
