import { validateGameCount } from '../src/utils/validate';
import { ERROR } from '../src/constants/constants';

describe('게임 횟수 입력값 검증 테스트', () => {
  test('게임 횟수를 올바르게 입력한 경우 예외가 발생하지 않음', () => {
    const input = 5;
    const result = () => validateGameCount(input);

    expect(result).not.toThrow();
  });

  test('게임 횟수를 0으로 입력한 경우 예외 발생', () => {
    const input = 0;
    const result = () => validateGameCount(input);

    expect(result).toThrow(ERROR.invalidCountRange);
  });

  test('숫자가 아닌 값을 입력한 경우 예외 발생', () => {
    const input = 'a4';
    const result = () => validateGameCount(input);

    expect(result).toThrow(ERROR.invalidCountType);
  });
});
