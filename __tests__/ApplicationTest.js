import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../src/View/InputView.js';

const mockNamesQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockCountsQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.pop();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
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

describe('자동차 경주 게임', () => {
  test('전진-정지(우승자 1명)', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '3'];
    const outputs = [
      'pobi : -',
      'woni : ',
      'pobi : -',
      'woni : -',
      'pobi : --',
      'woni : -',
      '최종 우승자 : pobi',
    ];
    const randoms = [MOVING_FORWARD, STOP, STOP, MOVING_FORWARD, MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockNamesQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('전진-정지(우승자 2명)', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni,jun', '3'];
    const outputs = [
      'pobi : -',
      'woni : ',
      'jun : ',
      'pobi : -',
      'woni : -',
      'jun : ',
      'pobi : --',
      'woni : --',
      'jun : ',
      '최종 우승자 : pobi, woni',
    ];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
    ];
    const logSpy = getLogSpy();

    mockNamesQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[['pobi']], [['pobi,,woni']], [['pobi,javaji']], [['pobi,eastjun']]])(
    '이름에 대한 예외 처리',
    async inputs => {
      // given
      mockNamesQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    },
  );

  test.each([[['pobi,woni', '0']], [['pobi,woni', '-3']], [['pobi,woni', '문자열']]])(
    '시도 횟수에 대한 예외 처리',
    async inputs => {
      // given
      mockCountsQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    },
  );
});
