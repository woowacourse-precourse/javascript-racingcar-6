import CountOfAttemp from '../../src/models/CountOfAttemp.js';
import AppError from '../../src/error/AppError.js';
import { ERROR_MESSAGES } from '../../src/constants/errorMessages.js';

describe('시도 횟수 값을 담당하는 클래스', () => {
  test('정상적인 입력값이 들어갔을 때, 정상적인 시도 횟수를 반환한다.', () => {
    const attemps = 3;
    const countOfAttemp = new CountOfAttemp(attemps);
    const result = countOfAttemp.getNumberOfAttemps();

    expect(result).toBe(attemps);
  });

  test('숫자가 아닌 값이 입력될 경우, 예외가 발생한다.', () => {
    const attemps = NaN;

    expect(() => {
      new CountOfAttemp(attemps);
    }).toThrow(new AppError(ERROR_MESSAGES.not_a_number));
  });

  test('소수가 입력될 경우, 예외가 발생한다.', () => {
    const attemps = '1.5';

    expect(() => {
      new CountOfAttemp(attemps);
    }).toThrow(new AppError(ERROR_MESSAGES.not_integer));
  });

  test('중간에 공백을 포함할 경우 예외가 발생한다.', () => {
    const attemps = '1 2';

    expect(() => {
      CountOfAttemp.fromInputString(attemps);
    }).toThrow(new AppError(ERROR_MESSAGES.not_a_number));
  });

  test('시도 횟수가 최소 횟수보다 작을 경우, 예외가 발생한다.', () => {
    const attemps = 0;

    expect(() => {
      new CountOfAttemp(attemps);
    }).toThrow(new AppError(ERROR_MESSAGES.out_of_range_of_attemps));
  });
});
