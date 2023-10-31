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
  test('6글자 이상 이름 테스트', async () => {
    const inputs = ['12345,123456', '1'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('중복된 이름 테스트', async () => {
    const inputs = ['1234,123,1234', '1'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('이름이 1글자 이상인지 확인하는 테스트', async () => {
    const inputs = ['1,,', '1'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('시도할 횟수가 숫자인지 확인하는 테스트', async () => {
    const inputs = ['1,2,3', 'x'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('시도할 횟수가 1이상인지 확인하는 테스트', async () => {
    const inputs = ['1,2,3', '0'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

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

  test.each([[['pobi,javaji']], [['pobi,eastjun']]])(
    '이름에 대한 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    }
  );
});
