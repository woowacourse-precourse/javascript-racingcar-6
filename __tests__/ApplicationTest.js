import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR } from '../src/constants/index.js';

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

  // 자동차 이름 입력 테스트
  test.each([[['가나다', '3']], [['a', '3']], [['12345', '3']], [['', '3']]])(
    '이름에 대한 예외 처리 - 2개 미만인 경우',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(ERROR.NOT_PLURAL);
    },
  );

  test.each([
    [['가나다,가나다라마바', '3']],
    [['ABC,ABCDEF', '3']],
    [['123456,789', '3']],
    [['abcdef,ghijkl', '3']],
  ])('이름에 대한 예외 처리 - 5자를 초과하는 경우', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(ERROR.NOT_UNDER_LEN);
  });

  test.each([
    [['가나다,가나다', '3']],
    [['abc,abc', '3']],
    [['123,123', '3']],
    [['A00!@,A00!@', '3']],
  ])('이름에 대한 예외 처리 - 중복되는 경우', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(ERROR.NOT_UNIQUE);
  });

  // 시도 횟수 입력 테스트
  test.each([
    [['A,B,C', undefined]],
    [['A,B,C', '']],
    [['A,B,C', ' ']],
    [['A,B,C', 'a']],
    [['A,B,C', '가']],
    [['A,B,C', '#']],
    [['A,B,C', '-1']],
  ])('시도할 횟수에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(ERROR.NOT_NUMBER);
  });
});
