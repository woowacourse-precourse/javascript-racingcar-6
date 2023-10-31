import Validator from '../src/utils/Validator.js';

describe('', () => {
  test('', () => {
    const input = Validator.validate(
      true,
      '[ERROR] 입력이 유효하지 않습니다. 5글자 이하로 입력해주세요.',
    );
    expect(input).toEqual(true);
  });
});
