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
    '이름의 길이에 대한 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    },
  );

  test.each([[['']], [['sujin,']], [['suji,jun,']]])(
    '이름이 공백인 경우 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR] 공백을 입력했습니다.');
    },
  );

  test.each([[['pobi,pobi']], [['수진,수진']]])(
    '중복된 이름에 대한 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(
        '[ERROR] 동일한 이름을 중복하여 입력했습니다.',
      );
    },
  );

  test.each([
    [['jun ,jason']],
    [['pobi,jun  ']],
    [['i,💗,JS']],
    [['pobi,jas😊']],
    [['왼손,잡이!']],
    [['hi~,nick']],
    [['a(A),java']],
    [['joe,star*']],
  ])(
    '공백, 특수문자, 이모티콘이 포함된 이름에 대한 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(
        '[ERROR] 이름에 공백, 특수문자, 이모티콘을 포함하지 마세요.',
      );
    },
  );

  test.each([
    [['sujin,jinsu', 'a']],
    [['sujin,jinsu', '일']],
    [['sujin,jinsu', '!']],
    [['sujin,jinsu', 'l']],
  ])('시도 횟수가 숫자 형식이 아닌 경우 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      '[ERROR] 숫자 형식으로만 입력해야 합니다.',
    );
  });

  test.each([
    [['sujin,jinsu', '0']],
    [['sujin,jinsu', '-1']],
    [['sujin,jinsu', '3.14']],
    [['sujin,jinsu', '+2.5']],
    [['sujin,jinsu', '-6.8']],
  ])('시도 횟수가 양의 정수가 아닌 경우 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      '[ERROR] 양의 정수만 입력해야 합니다.',
    );
  });
});
