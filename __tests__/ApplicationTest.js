import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import Race from '../src/Race.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
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

  test.each([[['pobi,javaji']], [['pobi,eastjun']]])('이름에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('숫자가 아닌 시도 횟수 입력 시 예외 처리', async () => {
    // given
    const inputs = ['pobi,woni', 'a'];

    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('자동차 전진 후 실행 결과 출력', async () => {
    // given
    const names = ['pobi', 'woni'];
    const race = new Race(names);

    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();

    race.cars[0].track = '---';
    race.cars[1].track = '--';

    const expectedOutputs = ['pobi : ---', 'woni : --'];

    // when
    race.displayAllCars();

    // then
    expectedOutputs.forEach((output, idx) => {
      expect(logSpy.mock.calls[idx][0]).toEqual(output);
    });
  });
});
