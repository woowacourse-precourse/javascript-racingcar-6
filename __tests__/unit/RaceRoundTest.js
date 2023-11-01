import { MissionUtils } from '@woowacourse/mission-utils';
import RaceRound from '../../src/RaceRound';
import Cars from '../../src/Cars.js';

const mockRandoms = (numbers) => {
  RaceRound.createRandomNum = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), RaceRound.createRandomNum);
};

const getRandomSpy = () => {
  const randomSpy = jest.spyOn(MissionUtils.Random, 'pickNumberInRange');
  randomSpy.mockClear();
  return randomSpy;
};

describe('경기가 진행되는 라운드', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('는 0~9 사이의 랜덤한 숫자를 생성하는가?', () => {
    const randomSpy = getRandomSpy();
    RaceRound.createRandomNum();

    expect(randomSpy).toBeCalledTimes(1);
  });

  test('는 자동차의 이름 수 만큼 라운드가 진행되는가?', () => {
    // given
    const names = ['gori', 'tobi', 'nori'];
    const cars = new Cars(names);
    const raceRound = new RaceRound(cars, 3);
    const randomSpy = getRandomSpy();
    const expectRound = 3 * names.length;

    // when
    raceRound.proceedRound();

    // then
    expect(randomSpy).toBeCalledTimes(expectRound);
  });

  test('모든 자동차에게 랜덤한 숫자를 제공하는가?', () => {
    // given
    const names = ['pobi'];
    const cars = new Cars(names);
    const MOVING_FORWARD = 4;
    const raceRound = new RaceRound(cars, 1);
    const movingForwardSpy = jest.spyOn(cars, 'movingForwardSpecificName');

    // when
    mockRandoms([MOVING_FORWARD]);

    // then
    raceRound.proceedRound();
    expect(movingForwardSpy).toBeCalledTimes(1);
  });

  test('종료 시 최종 우승자를 판별하는가?', () => {
    // given
    const names = ['pobi', 'nori'];
    const cars = new Cars(names);
    const MOVING_FORWARD = 4;
    const STOP = 0;
    const randoms = [MOVING_FORWARD, STOP];
    const raceRound = new RaceRound(cars, 2);

    // when
    mockRandoms([...randoms]);

    // then
    raceRound.proceedRound();
    const winner = raceRound.makeOutWinners();
    expect(winner).toContainEqual('pobi');
  });
});
