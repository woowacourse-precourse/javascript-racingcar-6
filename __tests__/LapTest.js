import LapsValidator from '../src/models/LapsValidator.js';
import { ERROR_MESSAGES } from '../src/constants/messages.js';
import removeWhiteSpace from '../src/utils/removeWhiteSpace.js';

describe('시도할 횟수(Laps) 유효성 테스트', () => {
  const lapsValidator = new LapsValidator();

  it('Number type 이외의 입력', () => {
    const laps = 'abcd';

    expect(() => {
      lapsValidator.isValid(laps);
    }).toThrow(ERROR_MESSAGES.integer);
  });

  it('0 이하의 값의 입력', () => {
    const laps = 0;

    expect(() => {
      lapsValidator.isValid(laps);
    }).toThrow(ERROR_MESSAGES.positive);
  });

  it('부분 유효한 입력', () => {
    const laps = '1a';

    expect(() => {
      lapsValidator.isValid(laps);
    }).toThrow(ERROR_MESSAGES.integer);
  });

  it('각 자릿 수 사이에 공백이 들어간 입력', () => {
    const laps = '1  1';

    expect(() => {
      lapsValidator.isValid(laps);
    }).toThrow(ERROR_MESSAGES.integer);
  });

  it('각 자릿 수 사이에 공백이 들어간 입력', () => {
    const laps = removeWhiteSpace('1  1');

    expect(() => {
      lapsValidator.isValid(laps);
    }).not.toThrow();
  });
});
