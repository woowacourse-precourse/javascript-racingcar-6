import { MissionUtils } from '@woowacourse/mission-utils';
import CarSet from '../src/CarSet.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('class CarSet test', () => {
  const names = ['A1', 'A2', 'A3'];
  const carSet = new CarSet(names);

  test('[Method Test] race', () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [
      ...Array(3).fill(STOP),
      ...Array(3).fill(MOVING_FORWARD),
      ...[STOP, MOVING_FORWARD, STOP],
    ];
    const postionResults = [
      ['A1 : ', 'A2 : ', 'A3 : '],
      ['A1 : -', 'A2 : -', 'A3 : -'],
      ['A1 : -', 'A2 : --', 'A3 : -'],
    ];

    MissionUtils.Console.print = jest.fn();
    mockRandoms(randoms);

    let count = 1;
    postionResults.forEach((resultArr) => {
      carSet.race();
      resultArr.forEach((result) => {
        expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(
          count,
          result,
        );
        count += 1;
      });
      count += 1;
    });
  });

  test('[Method Test] findWinners', () => {
    const winners = ['A2'];
    expect(carSet.findWinners()).toEqual(winners);
  });
});
