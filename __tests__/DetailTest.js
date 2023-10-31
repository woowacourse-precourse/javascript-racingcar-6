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
  test('자동차 이름에 대한 예외 처리 - 빈칸 입력', async () => {
    // given
    const inputs = ['pobi, ,woni'];

    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수 입력', async () => {
    // given
    const inputs = ['pobi,woni', '5'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('실행 결과'));
  });

  test('실행 결과 출력', async () => {
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

  test('우승자 출력 - 단독 우승자', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const outputs = ['최종 우승자 : pobi'];
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

  test('우승자 출력 - 공동 우승자', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '5'];
    const outputs = ['최종 우승자 : pobi,woni'];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms, ...randoms, ...randoms, ...randoms, ...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([
    [['pobi,javaji']],
    [['pobi,eastjun']],
    [['pobi']],
    [['pobi,pobi']],
  ])('자동차 이름에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test.each([
    [['pobi,woni'], '0'],
    [['pobi,woni'], '-1'],
    [['pobi,woni'], '1001'],
    [['pobi,woni'], 'abc'],
  ])('시도 횟수에 대한 예외 처리', async (inputs, tryNumbers) => {
    // given
    mockQuestions([...inputs, tryNumbers]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  describe('자동차 대수 제한', () => {
    test('20대 이상의 자동차 대수 입력 시 예외 처리', async () => {
      // given
      const inputs = [
        'car1,car2,car3,car4,car5,car6,car7,car8,car9,car10,car11,car12,car13,car14,car15,car16,car17,car18,car19,car20,car21',
      ];

      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    });
  });
});
