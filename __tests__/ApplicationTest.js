import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

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
  test('레이싱 시작 전 문구가 잘 출력되는지', async () => {
    // given
    const CAR_NAMES = 'pobi,woni';
    const MOVE_COUNT = '1';
    MissionUtils.Console.readLineAsync = jest
      .fn()
      .mockReturnValueOnce(CAR_NAMES) // 경주할 자동차 이름
      .mockReturnValueOnce(MOVE_COUNT); // 시도할 횟수

    // when
    const app = new App();
    await app.play();

    // then
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      '시도할 횟수는 몇 회인가요\n',
    );
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

  test.each([[['pobi,javaji']], [['pobi,eastjun']], [['']]])(
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

  test.each([[['']], [['hello']], [['-1']]])(
    '시도할 횟수에 대한 예외 처리',
    async (inputs) => {
      // given
      const mock = ['pobi,woni', ...inputs];
      mockQuestions(mock);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    },
  );
});
