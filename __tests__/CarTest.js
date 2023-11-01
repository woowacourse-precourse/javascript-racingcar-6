import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/Car.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('class Car test', () => {
  const car = new Car('Goonco');

  test('[Method Test] tryMove', () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [STOP, STOP, MOVING_FORWARD, STOP, MOVING_FORWARD];
    const postionResults = [0, 0, 1, 1, 2];

    mockRandoms(randoms);

    randoms.forEach((mockedRandom, idx) => {
      car.tryMove();
      expect(car.getPosition()).toBe(postionResults[idx]);
    });
  });

  test('[Method Test] printPosition', () => {
    const printResult = 'Goonco : --';
    MissionUtils.Console.print = jest.fn();

    car.printPosition();
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(printResult);
  });
});
