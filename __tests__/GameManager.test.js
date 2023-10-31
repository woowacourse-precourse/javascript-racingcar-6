import { MissionUtils } from '@woowacourse/mission-utils';
import GameManager from '../src/controller/GameManager';
import { CARS } from '../src/Constants.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('GameManager 클래스의 메소드들의 테스트', () => {
  beforeEach(() => {
    CARS.length = 0;
    jest.resetAllMocks();
  });

  test('initGame 메소드가 입력 받은 자동차이름을 입력 받고, CARS 배열에 자동차 정보들을 저장하는가', async () => {
    // given
    mockQuestions(['cars1,cars2,cars3']);
    // when
    const gameManager = new GameManager();
    await gameManager.initGame();
    // then
    expect(CARS).toEqual([
      { carName: 'cars1', forwardNumber: 0 },
      { carName: 'cars2', forwardNumber: 0 },
      { carName: 'cars3', forwardNumber: 0 },
    ]);
  });

  test('startRace 메소드가 입력받은 횟수만큼 레이스게임을 실행하고, 실행한 결과를 잘 저장하는가', async () => {
    // given
    CARS.push({ carName: 'cars1', forwardNumber: 0 });
    CARS.push({ carName: 'cars2', forwardNumber: 0 });
    const MOVING_FORWARD = 4;
    const STOP = 3;
    // when
    mockQuestions(['3']);
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD
    ];
    mockRandoms([...randoms]);
    const gameManager = new GameManager();
    await gameManager.startRace();
    // then
    expect(CARS).toEqual([
      { carName: 'cars1', forwardNumber: 3 },
      { carName: 'cars2', forwardNumber: 1 },
    ]);
  });

  test('finishGame 메소드가 결과를 올바르게 출력해주는가', async () => {
    // given
    CARS.push({ carName: 'cars1', forwardNumber: 5 });
    CARS.push({ carName: 'cars2', forwardNumber: 5 });
    CARS.push({ carName: 'cars3', forwardNumber: 4 });
    // when
    const logSpy = getLogSpy();
    const output = '최종우승자 : cars1, cars2';
    const gameManager = new GameManager();
    await gameManager.finishGame();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
