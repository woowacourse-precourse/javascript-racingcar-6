import isValidCount from './index.js';

describe('isValidCount', () => {
  test.each([
    [1, true],
    [9, true],
  ])('입력값 %s 는 유효한 값이기에 %s 를 return 합니다.', (input, expected) => {
    expect(isValidCount(input)).toBe(expected);
  });

  test.each([
    [0, false],
    [10, false],
  ])('입력값 %s 는 유효하지 않은 값이기에 %s 를 return 합니다.', (input, expected) => {
    expect(isValidCount(input)).toBe(expected);
  });
});
