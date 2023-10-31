import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import Judge from '../src/Judge.js';

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

  test('점수가 같을시, 공동 우승', async () => {
    // given
    const SAME_NUMBER = 4;
    const input = { pobi: SAME_NUMBER, woni: SAME_NUMBER, jun: SAME_NUMBER };
    const output = 'pobi, woni, jun';

    // when
    const judge = new Judge();
    const result = await judge.decideWinner(input);

    // then
    expect(result).toContain(output);
  });

  test.each([[['pobi,javaji']], [['pobi,eastjun']]])(
    '이름에 대한 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(
        '[ERROR] 자동차 이름은 1~5자 이내로 설정할 수 있습니다.',
      );
    },
  );

  test.each([[['pobi,jun', 'wooteco']], [['pobi,woni', '1.2']]])(
    '정수외의 횟수 입력에 대한 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(
        '[ERROR] 횟수는 정수만 입력 가능합니다.',
      );
    },
  );

  test.each([[['p', '-1']], [['jun,woni', '0']]])(
    '0보다 작은 횟수 입력에 대한 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(
        '[ERROR] 1회 부터 플레이 가능합니다.',
      );
    },
  );
});
