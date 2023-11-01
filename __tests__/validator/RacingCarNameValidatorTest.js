import { GRANDPRIX_ERROR_NOTIFICATION } from '../../src/constants/GrandPrixError.js';
import { validateRacingCarName } from '../../src/validator/index.js';

describe('레이싱카 이름 유효성 검증 테스트', () => {
  const expectErrorMessage = Object.freeze({
    invalidLength: GRANDPRIX_ERROR_NOTIFICATION.invalidNameLength,
    duplicationName: GRANDPRIX_ERROR_NOTIFICATION.duplicatedName,
  });

  // given
  test.each([
    { input: 'abcdef,ghi', expectError: expectErrorMessage.invalidLength },
    { input: ',def,ghijkl', expectError: expectErrorMessage.invalidLength },
    { input: 'abcdef,ghi,', expectError: expectErrorMessage.invalidLength },
    { input: 'wooteco,precourse', expectError: expectErrorMessage.invalidLength },
    { input: 'abc,abc,abc,abc', expectError: expectErrorMessage.duplicationName },
    { input: 'bcd,efg,bcd,efg', expectError: expectErrorMessage.duplicationName },
    { input: 'woote,woote', expectError: expectErrorMessage.duplicationName },
    { input: 'preco,preco', expectError: expectErrorMessage.duplicationName },
  ])('에러 테스트', ({ input, expectError }) => {
    // when & then
    expect(() => validateRacingCarName(input)).toThrow(expectError);
  });
});
