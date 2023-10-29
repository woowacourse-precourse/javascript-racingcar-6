import { RacingCarNameValidator } from '../../src/validator/index.js';

describe('레이싱카 이름 유효성 검증 테스트', () => {
  const errorMessage = Object.freeze({
    invalidLength: RacingCarNameValidator.CARNAME_VALIDATION_TYPES.validNameLength.message,
    duplicationName: RacingCarNameValidator.CARNAME_VALIDATION_TYPES.duplicationName.message,
  });

  test.each([
    { input: 'abcdef,ghi', expectError: errorMessage.invalidLength },
    { input: 'abc,def,ghijkl', expectError: errorMessage.invalidLength },
    { input: 'abcdef,ghi,jkl', expectError: errorMessage.invalidLength },
    { input: 'wooteco,precourse', expectError: errorMessage.invalidLength },
    { input: 'abc,abc,abc,abc', expectError: errorMessage.duplicationName },
    { input: 'bcd,efg,bcd,efg', expectError: errorMessage.duplicationName },
    { input: 'woote,woote', expectError: errorMessage.duplicationName },
    { input: 'preco,preco', expectError: errorMessage.duplicationName },
  ])('에러 테스트', ({ input, expectError }) => {
    const racingCarNameValidator = new RacingCarNameValidator(input);
    expect(() => racingCarNameValidator.validateRacingCarName()).toThrow(expectError);
  });
});
