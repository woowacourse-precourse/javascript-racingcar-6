import { SYSTEM } from '../../src/constants/System.js';
import RandomNumberGenerator from '../../src/model/RandomNumberGenerator.js';

describe('RandomNumberGenerator', () => {
  test('should return a random number between 0 and 9', () => {
    const result = RandomNumberGenerator.run();
    expect(result).toBeGreaterThanOrEqual(SYSTEM.randomNumberMin);
    expect(result).toBeLessThanOrEqual(SYSTEM.randomNumberMax);
  });
});
