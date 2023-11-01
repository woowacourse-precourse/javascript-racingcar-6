import RacingGame from '../src/RacingGame';
import { RACE_NUMBER } from '../src/Constant';

describe('무작위 값 구해서 자동차 전진하거나 멈추기', () => {
  test('0에서 9 사이의 무작위 값 추츨', () => {
    const randomNumber = RacingGame.getRandomNumber();

    expect(randomNumber).toBeGreaterThanOrEqual(RACE_NUMBER.minRandom);
    expect(randomNumber).toBeLessThanOrEqual(RACE_NUMBER.maxRandom);
  });

  test('무작위 값이 4 이상이면 전진', () => {
    const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [false, false, false, false, true, true, true, true, true, true];
    
    randomNumbers.forEach((input, index) => {
      expect(RacingGame.judgeMove(input)).toBe(result[index]);
    })
  });
});
