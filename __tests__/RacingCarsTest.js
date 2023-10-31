import { MissionUtils } from '@woowacourse/mission-utils';
import RacingCars from '../src/RacingCars.js';
import { MESSAGE } from '../src/constants/Constant.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('RacingCars 클래스 테스트', () => {
  test.each([
    { names: ['pobi'], random: [3], output: 'pobi : ' },
    { names: ['pobi', 'yuna', 'lisa'], random: [2, 4, 6], output: 'pobi : \nyuna : -\nlisa : -' },
  ])('각 차수별 이동 결과를 제대로 반환하는지 테스트', ({ names, random, output }) => {
    // given
    mockRandoms(random);

    // when
    const racingCars = new RacingCars(names);
    const result = racingCars.getMovingLog();

    // then
    expect(result).toBe(output);
  });

  test.each([
    {
      names: ['pobi'],
      randoms: [4],
      outputs: `${MESSAGE.finalWinner} pobi`,
    },
    {
      names: ['pobi', 'yuna', 'lisa'],
      randoms: [1, 9, 2],
      outputs: `${MESSAGE.finalWinner} yuna`,
    },
    {
      names: ['pobi', 'yuna', 'lisa'],
      randoms: [8, 9, 2],
      outputs: `${MESSAGE.finalWinner} pobi, yuna`,
    },
  ])('이동 횟수를 비교해서 우승자를 가려내는 기능 테스트', ({ names, randoms, outputs }) => {
    // given
    mockRandoms(randoms);
    const racingCars = new RacingCars(names);
    racingCars.getMovingLog();

    // when
    const result = racingCars.getWinners();

    // then
    expect(result).toEqual(outputs);
  });
});
