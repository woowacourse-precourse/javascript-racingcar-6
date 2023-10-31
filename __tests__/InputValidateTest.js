import {
  hasDuplicateCarName,
  isValidCarName,
  isValidRound,
} from '../src/validators/validator';
import { ERROR_MESSAGE } from '../src/constants/messages';

describe('자동차 이름 입력 테스트', () => {
  test('중복된 자동차 이름이 들어왔을 때 예외를 반환한다.', () => {
    const carNames = ['Car1', 'Car1', 'Car2'];

    expect(() => hasDuplicateCarName(carNames)).toThrow(
      ERROR_MESSAGE.duplicateCarName,
    );
  });

  test('자동차 이름이 빈 값이면 예외를 반환한다.', () => {
    const carNames = [' ', '   '];

    expect(() => isValidCarName(carNames)).toThrow(
      ERROR_MESSAGE.invalidCarName,
    );
  });

  test('자동차 이름이 5자리 이상이면 예외를 반환한다.', () => {
    const carNames = ['carcarcar'];

    expect(() => isValidCarName(carNames)).toThrow(
      ERROR_MESSAGE.invalidCarName,
    );
  });

  test('라운드 횟수가 숫자가 아닐 경우 예외를 반환한다.', () => {
    const invalidRound = 'invalid';

    expect(() => isValidRound(invalidRound)).toThrow(
      ERROR_MESSAGE.invalidTrycount,
    );
  });
});

describe('round 입력 테스트', () => {
  test('round가 숫자가 아닐 경우 예외를 반환한다.', () => {
    const invalidRound = 'invalid';

    expect(() => isValidRound(invalidRound)).toThrow(
      ERROR_MESSAGE.invalidTrycount,
    );
  });
});
