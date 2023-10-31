import { validateGameCount } from '../src/utils/validate';
import { ERROR } from '../src/constants/constants';

describe('게임 횟수 입력값 검증 테스트', () => {
  test('게임 횟수를 올바르게 입력한 경우 예외가 발생하지 않음', () => {
    const input = 5;

    expect(() => validateGameCount(input)).not.toThrow();
  });

  test.each([
    {
      input: 0,
      test: '게임 횟수를 0으로 입력한 경우 예외 발생',
      expectedMessage: ERROR.invalidCountRange,
    },
    {
      input: 'a4',
      test: '숫자가 아닌 값을 입력한 경우 예외 발생',
      expectedMessage: ERROR.invalidCountType,
    },
  ])('$test', ({ input, expectedMessage }) => {
    expect(() => validateGameCount(input)).toThrow(expectedMessage);
  });
});
