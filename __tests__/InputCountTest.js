import { inputCount } from '../src/racingCars/playGame.js';
import { validateInputCount } from '../src/racingCars/utils/index.js';

describe('validateInputCount 함수 테스트.', () => {
  test('숫자여야 하며, 0은 받을 수 없다.', () => {
    expect(() => validateInputCount('숫자가아닌문자')).toThrow();
    expect(() => validateInputCount(0)).toThrow();
  });
});
