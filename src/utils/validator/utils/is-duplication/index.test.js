import isDuplication from './index.js';

describe('isDuplication', () => {
  test('중복되는 값이 존재하면 true 리턴', () => {
    // given
    const input = ['상어', '고등어', '참치', '상어'];

    // when
    const output = isDuplication(input);

    // then
    expect(output).toBe(true);
  });

  test('중복되는 값이 존재하지 않으면 false 리턴', () => {
    // given
    const input = ['미역', '소라', '해파리'];

    // when
    const output = isDuplication(input);

    // then
    expect(output).toBe(false);
  });
});
