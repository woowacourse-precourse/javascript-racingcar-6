import { MissionUtils } from '@woowacourse/mission-utils';
import RaceRound from "../../src/RaceRound";

const mockRandoms = (inputs) => {
  RaceRound.createRandomNum = jest.fn();
  RaceRound.createRandomNum.mockImplementation(() => {
    const input = inputs.shift();
    return input;
  });
};

const getRandomSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Random, 'pickNumberInRange');
  logSpy.mockClear();
  return logSpy;
};

describe('경기가 진행되는 라운드는', () => {
  test('0~9 사이의 랜덤한 숫자를 생성하는가?', () => {
    const randomSpy = getRandomSpy();
    RaceRound.createRandomNum();

    expect(randomSpy).toBeCalledTimes(1);
  });

  test('자동차의 이름 수 만큼 라운드가 진행되는가?', () => {
    const names = ['pobi', 'nori', 'goni'];
    const raceRound = new RaceRound(names);
    const randomSpy = getRandomSpy();
    const totalRound = names.length ** 2;
    raceRound.proceedRound();

    expect(randomSpy).toBeCalledTimes(totalRound);
  });

  test('모든 자동차에게 랜덤한 숫자를 제공하는가?', () => {
    const names = ['pobi'];
    const MOVING_FORWARD = 4;
    const raceRound = new RaceRound(names);
    const movingForwardSpy = jest.spyOn(raceRound, 'movingForwardByName');

    mockRandoms([MOVING_FORWARD]);

    raceRound.proceedRound();
    expect(movingForwardSpy).toBeCalledTimes(1);
  });
});