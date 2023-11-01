import randomNumberGenerator from '../src/utils/randomNumberGenerator.js';

describe('randomNumberGenerator', () => {
  test('0과 9 사이의 숫자를 반환', () => {
    const randomNumber = randomNumberGenerator();

    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(9);
  });
});