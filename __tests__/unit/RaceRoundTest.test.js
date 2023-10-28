import { MissionUtils, Random } from '@woowacourse/mission-utils';
import Cars from '../../src/Cars';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getRandomSpy = () => {
  const randomSpy = jest.spyOn(MissionUtils.Random, 'pickNumberInRange');
  randomSpy.mockClear();
  return randomSpy;
};

describe('입력 받은 자동차 경기 라운드가', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('0이상의 정수인가?', () => {
    const raceRound = new RaceRound();
    expect(raceRound.count).toBeGreaterThan(1);
  });
});

describe('매 라운드마다', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('모든 자동차들에게 고유한 랜덤한 숫자가 생성되는가?', () => {
  });

  test('숫자가 4미만일 경우 차가 움직이지 않는가?', () => {
  });

  test('숫자가 4미만일 경우 차가 움직이면 예외 처리가 일어나는가?', () => {
  });

  test('숫자가 4이상일 경우 차가 앞으로 움직이는가?', () => {});

  test('숫자가 4이상일 경우 차가 움직이지 않으면 예외 처리가 일어나는가?', () => {});
});
