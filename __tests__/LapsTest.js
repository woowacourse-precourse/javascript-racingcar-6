import InputValidator from '../src/models/InputValidator';
import { ERROR_MESSAGE } from '../src/constants';

describe('시도 횟수 유효성 테스트', () => {
  test('시도 횟수가 0보다 작은 경우', () => {
    const laps = -1;

    expect(() => {
      InputValidator.validateLaps(laps);
    }).toThrow(ERROR_MESSAGE.positive);
  });

  test('시도 횟수가 숫자가 아닌 경우', () => {
    const laps = '시도 횟수';

    expect(() => {
      InputValidator.validateLaps(laps);
    }).toThrow(ERROR_MESSAGE.number);
  });

  test('시도 횟수가 정상적일 경우', () => {
    const laps = 10;

    expect(() => {
      InputValidator.validateLaps(laps);
    }).not.toThrow();
  });
});
