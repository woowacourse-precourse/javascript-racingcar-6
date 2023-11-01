import RacingGame from '../src/RacingGame';
import { RACE_NUMBER } from '../src/Constant';

describe('무작위 값 구해서 자동차 전진하거나 멈추기', () => {
  test('0에서 9 사이의 무작위 값 추츨하기', () => {
    const randomNumber = RacingGame.getRandomNumber();

    expect(randomNumber).toBeGreaterThanOrEqual(RACE_NUMBER.minRandom);
    expect(randomNumber).toBeLessThanOrEqual(RACE_NUMBER.maxRandom);
  });
});
