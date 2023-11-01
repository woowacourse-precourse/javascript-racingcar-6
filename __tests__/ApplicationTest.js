import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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

describe('자동차 경주 게임', () => {
  test('전진-정지', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const outputs = ['pobi : -', 'woni : '];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      console.log(app.carPosition);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  describe('입력값 예외처리 확인', () => {
    test.each([
      [['pobi,javaji', '1']],
      [['pobi,eastjun', '1']],
      [['pobi,pobi', '1']],
      [['pobi,1', '1']],
      [['pobi java', '1']],
      [['채은', '1']],
      [['b1', '1']],
    ])('이름에 대한 예외 처리', async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    });

    test.each([
      [['pobi', '0']],
      [['pobi', 'a']],
      [['pobi', '채은']],
      [['pobi', 'null']],
      [['pobi', 'undefined']],
      [['pobi', '{}']],
      [['pobi', '']],
    ])('횟수에 대한 예외처리', async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    });
  });
});
