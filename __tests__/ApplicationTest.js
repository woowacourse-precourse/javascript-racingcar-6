import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import RacingCar from '../src/RacingCar.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 게임', () => {
  test('전진-정지', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const outputs = ['pobi : -'];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[[',javaji']], [['pobi,eastjun']]])('이름에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});

test.each([[['tomas  ,myeon']], [['tom ,   mac']]])('자동차 이름 공백 제거 테스트', async (inputs) => {
  // given
  mockQuestions(inputs);

  // when
  const app = new App();

  // then
  await expect(app.getCarNamesInput()).resolves.not.toThrow();
});

test('자동차 객체 생성', () => {
  // given
  const carName = 'pobi';

  // when
  const racingCar = new RacingCar(carName);
  mockRandoms([4]);

  // then

  expect(racingCar.name).toBe('pobi'); // 레이싱카 이름

  expect(racingCar.distance).toBe(0); // 레이싱카 초기 거리 테스트

  racingCar.carMoveEvaluation();

  expect(racingCar.distance).toBe(1); // 레이싱카 이동 테스트
});

test.each([[['1e3']], [['hello']], [['12 3']]])('반복 횟수 예외 처리', async (inputs) => {
  // given
  mockQuestions(inputs);

  // when
  const app = new App();

  // then
  await expect(app.getRepeatCountInput()).rejects.toThrow('[ERROR]');
});
