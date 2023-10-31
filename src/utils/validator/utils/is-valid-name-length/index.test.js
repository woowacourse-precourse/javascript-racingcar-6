import isValidNameLength from './index.js';

describe('isValidNameLength', () => {
  test('알맞은 이름의 길이(2~6자)일때 true 리턴', () => {
    // given
    const inputs = [
      ['도레', '레미파', '솔라시도레'],
      ['aa', 'bbb', 'ccc', 'dddd', 'eeee'],
    ];

    // when
    // then
    inputs.forEach((input) => {
      expect(isValidNameLength(input)).toBe(true);
    });
  });

  test('알맞은 이름의 길이가 아닐 때 false 리턴', () => {
    // given
    const inputs = [
      ['도', '레', '미'],
      ['a', 'b', 'c', 'dd', 'eeee'],
      ['도레미파솔라시', '도', '시시'],
    ];

    // when
    // then
    inputs.forEach((input) => {
      expect(isValidNameLength(input)).toBe(false);
    });
  });
});
