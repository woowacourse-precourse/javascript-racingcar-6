import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR, RESULT } from '../src/messages.js';

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

describe('시도 횟수 입력 유효성 테스트', () => {
  test.each([
    [['a,b,c', 'e']],
    [['a,b,c', '@']],
    [['a,b,c', ' ']],
    [['a,b,c', '']],
  ])('시도 횟수 입력이 숫자가 아닌 경우', async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR.NOT_NUMBER);
  });

  test.each([[['a,b,c', '1.5']], [['a,b,c', '0.5']]])(
    '시도 횟수 입력이 정수가 아닌 경우',
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow(ERROR.NOT_INTEGER);
    }
  );

  test.each([[['a,b,c', '-1']], [['a,b,c', '-0']]])(
    '시도 횟수 입력이 0 이상의 정수가 아닌 경우',
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow(ERROR.NOT_POSITIVE);
    }
  );

  test.each([
    [['a,b,c', '0']],
    [['a,b,c', '1']],
    [['a,b,c', '10']],
    [['a,b,c', '5']],
  ])('유효한 시도 횟수를 입력한 경우', async (inputs) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(RESULT.WINNERS)
    );
  });
});
