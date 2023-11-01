import { SYSTEM } from '../../src/constants/System.js';
import RandomNumberGenerator from '../../src/model/RandomNumberGenerator.js';

describe('RandomNumberGenerator', () => {
  test('랜덤한 숫자는 0~9사이의 값이 나와야 한다.', () => {
    const result = RandomNumberGenerator.run();
    expect(result).toBeGreaterThanOrEqual(SYSTEM.randomNumberMin);
    expect(result).toBeLessThanOrEqual(SYSTEM.randomNumberMax);
  });
});
