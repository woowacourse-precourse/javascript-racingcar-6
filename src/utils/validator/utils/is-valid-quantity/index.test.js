import isValidQuantity from './index.js';

describe('isValidQuantity', () => {
  test.each([
    [['도레', '미파솔', '도레미파솔라', '도레미파솔라시도', '미파', '파솔'], true],
    [['도레', '미파'], true],
  ])(' %s는 유효한 대수입니다.', (input, expected) => {
    expect(isValidQuantity(input)).toBe(expected);
  });

  test.each([
    [['도파'], false],
    [['도레', '미파', '솔라', '시도', '레미', '파솔', '라시'], false],
  ])('%s는 유효하지 않은 대수 입니다.', (input, expected) => {
    expect(isValidQuantity(input)).toBe(expected);
  });
});
