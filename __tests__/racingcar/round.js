import Round from '../../src/racingcar/round.js';

describe('경기 횟수를 입력받는다.', () => {
  test('1이상의 수는 허용한다.', () => {
    // given
    const input = '1';

    // when
    const round = new Round();
    const result = round.isValidValue(input);

    // then
    expect(result).toBeTruthy();
  });

  test.each([
    '',
    '0',
    '-1',
    '1.1',
  ])('경기 횟수에 대한 예외 처리', input => {
    // when
    const round = new Round();
    const result = round.isValidValue(input);

    // then
    expect(result).toBeFalsy();
  });
});
