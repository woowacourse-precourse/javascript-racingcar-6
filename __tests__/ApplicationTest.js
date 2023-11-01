import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import { validNumberOfAttempts } from '../src/User.js';

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

  test('최중 우승자 출력 확인', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni,hi', '2'];
    const outputs = [
      'pobi : -',
      'woni : -',
      'hi : -',
      'pobi : --',
      'woni : --',
      'hi : -',
      'pobi, woni',
    ];
    const randoms = [
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test.each([
    [['pobi,javaji']],
    [['pobi,eastjun']],
    [['pobi,eastjun,pobi,eastjun,pobi,eastjun']],
    [[',asdf,']],
    [['']],
  ])('이름에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
  test.each([
    [['*']],
    [['0']],
    [['']],
    [['ㅁ']],
    [['a']],
    [['21']],
  ])('시도횟수에 대한 예외처리', async (inputs) => {
    await expect(validNumberOfAttempts(inputs)).rejects.toThrow('[ERROR]');
  });
});
