import InputValidator from '../src/models/InputValidator.js';
import { ERROR_MESSAGES } from '../src/constants/messages.js';

describe('시도할 횟수(Laps) 유효성 테스트', () => {
  it('Number type 이외의 입력', () => {
    const laps = 'abcd';

    expect(() => {
      InputValidator.laps(laps);
    }).toThrow(ERROR_MESSAGES.integer);
  });

  it('0 이하의 값의 입력', () => {
    const laps = '0';

    expect(() => {
      InputValidator.laps(laps);
    }).toThrow(ERROR_MESSAGES.positive);
  });

  it('각 자릿 수 사이에 공백이 들어간 입력', () => {
    const laps = '1  1';

    expect(() => {
      InputValidator.laps(laps);
    }).toThrow('에러');
  });
});
