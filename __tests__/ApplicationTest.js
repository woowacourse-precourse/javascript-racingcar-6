import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';

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

  test.each([[['pobi,javaji']], [['pobi,eastjun']]])(
    '이름에 대한 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);
      // when
      const app = new App();
      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    },
  );

  test('결과 출력', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const outputs = ['최종 우승자 :', 'pobi'];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms([...randoms]);
    // when
    const app = new App();
    await app.play();
    // then
    const lastCall = logSpy.mock.calls[logSpy.mock.calls.length - 1]; // 마지막 호출을 가져옴
    expect(lastCall[0]).toContain(outputs[1]);
  });
});
