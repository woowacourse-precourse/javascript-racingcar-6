import App from '../src/App';
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

describe('입력 테스트', () => {
  const MOVING_FORWARD = 4;
  const STOP = 3;
  // Car Name
  test('자동차 이름 5자 이하, 구분자는 ","만 - 통과', async () => {
    const randoms = [MOVING_FORWARD, STOP];
    const inputs = ['it/is,two', '1'];
    const outputs = ['최종 우승자 : it/is'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);
    const app = new App();

    await app.play();
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test('자동차 이름 5자 이하, 구분자는 ","만 - 오류', async () => {
    const randoms = [MOVING_FORWARD];
    const inputs = ['it/is/not/valid', '1'];

    mockQuestions(inputs);
    mockRandoms([...randoms]);
    const app = new App();
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  // Trial Number
  test('도할 횟수 입력 0이상 정수 - 통과', async () => {
    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD];
    const inputs = ['int', '3'];
    const outputs = ['최종 우승자 : int'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);
    const app = new App();

    await app.play();
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test.each([[['float', '3.5']], [['str', 'asd']], [['minus', '-6']]])(
    '도할 횟수 입력 0이상 정수 - 오류',
    async (inputs) => {
      const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD];

      mockQuestions(inputs);
      mockRandoms([...randoms]);
      const app = new App();
      await expect(app.play()).rejects.toThrow('[ERROR]');
    },
  );
});
