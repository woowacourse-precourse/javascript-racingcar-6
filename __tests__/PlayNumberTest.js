import { ERROR_MESSAGE } from '../src/Util/message';
import { checkErrorPlayNumber } from '../src/Util/validation';

describe('시도 횟수 입력', () => {
  test('[시도 횟수] 입력값 정상', () => {
    const input = 5;
    const resultFn = () => checkErrorPlayNumber(input);
    expect(resultFn).not.toThrow();
  });
  test('[시도 횟수] 숫자가 아닌 값', () => {
    const input = 'test';
    const resultFn = () => checkErrorPlayNumber(input);
    expect(resultFn).toThrow(ERROR_MESSAGE.type);
  });

  test('[시도 횟수] 1 이상의 정수가 아닌 값', () => {
    const input = -8;
    const resultFn = () => checkErrorPlayNumber(input);
    expect(resultFn).toThrow(ERROR_MESSAGE.scope);
  });
});
