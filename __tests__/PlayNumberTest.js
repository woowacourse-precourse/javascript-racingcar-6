import { ERROR_MESSAGE } from '../src/Util/message';
import { checkErrorPlayNumber } from '../src/Util/validation';

describe('시도 횟수 에러 처리', () => {
  test('[시도 횟수] 입력값 정상', () => {
    const input = 5;
    expect(() => checkErrorPlayNumber(input)).not.toThrow();
  });
  test('[시도 횟수] 숫자가 아닌 입력값 에러', () => {
    const input = 'test';
    expect(() => checkErrorPlayNumber(input)).toThrow(ERROR_MESSAGE.type);
  });

  test('[시도 횟수] 1 이상의 정수가 아닌 입력값 에러', () => {
    const input = -8;
    expect(() => checkErrorPlayNumber(input)).toThrow(ERROR_MESSAGE.scope);
  });
});
