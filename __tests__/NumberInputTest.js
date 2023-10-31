import checkAttemptValidity from '../src/modules/validation/checkAttemptValidity';

describe('시도 횟수 입력 테스트', () => {
  test('문자열이 아닌지 테스트', () => {
    // given
    const input = 'abc';

    // when
    const output = checkAttemptValidity(input);

    // then
    expect(output).toEqual(false);
  });

  test('0이 아닌지 테스트', () => {
    // given
    const input = '0';

    // when
    const output = checkAttemptValidity(input);

    // then
    expect(output).toEqual(false);
  });

  test('숫자인지 테스트', () => {
    // given
    const input = '123';

    // when
    const output = checkAttemptValidity(input);

    // then
    expect(output).toEqual(true);
  });
});
