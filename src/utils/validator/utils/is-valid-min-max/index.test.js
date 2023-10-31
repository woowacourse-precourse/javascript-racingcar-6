import isValidMinMax from './index.js';

describe('isValidMinMax', () => {
  test.each([
    [5, 0, 9, true],
    [1, 0, 9, true],
  ])('%s는 %s ~ %s 사이게 속하기에 %s를 return 합니다.', (input, min, max, expected) => {
    expect(isValidMinMax(input, min, max)).toBe(expected);
  });

  test.each([
    [11, 0, 9, false],
    [-1, 0, 9, false],
  ])('%s는 %s ~ %s 사이게 속하지 않기에 %s를 return 합니다.', (input, min, max, expected) => {
    expect(isValidMinMax(input, min, max)).toBe(expected);
  });
});
