import { isValidCarNames, isValidTryNum } from '../src/Validation.js';
import { ERROR_MESSAGES } from '../src/Constants.js';

describe('사용자 입력값 검증', () => {
  it('자동차 이름이 입력되지 않았습니다.', () => {
    expect(() => isValidCarNames([])).toThrowError(ERROR_MESSAGES.EMPTY_INPUT);
  });
  it('자동차 이름은 5자 이하이여야 합니다.', () => {
    expect(() => isValidCarNames(['sunghyun', 'kim'])).toThrowError(
      ERROR_MESSAGES.INVALID_CARNAME_LENGTH
    );
  });
  it('자동차 이름은 1자 이상이여야 합니다.', () => {
    expect(() => isValidCarNames(['sunghyun', ''])).toThrowError(
      ERROR_MESSAGES.INVALID_CARNAME_LENGTH
    );
  });
  it('시도할 횟수가 입력되지 않았습니다.', () => {
    expect(() => isValidTryNum()).toThrowError(ERROR_MESSAGES.EMPTY_INPUT);
  });
  it('입력값에 공백이 포함되어 있습니다.', () => {
    const input = '1 2';
    expect(() => isValidTryNum(input)).toThrowError(ERROR_MESSAGES.INCLUDE_BLANK);
  });
  it('입력값이 숫자가 아닙니다.', () => {
    const input = 'sunghyun';
    expect(() => isValidTryNum(input)).toThrowError(ERROR_MESSAGES.NOT_NUMBER);
  });
  it('입력값이 숫자가 아닙니다.', () => {
    const input = 's1';
    expect(() => isValidTryNum(input)).toThrowError(ERROR_MESSAGES.NOT_NUMBER);
  });
  it('1보다 작은 값이 들어왔습니다.', () => {
    const input = '0';
    expect(() => isValidTryNum(input)).toThrowError(ERROR_MESSAGES.SMALLER_THAN_ONE);
  });
});
