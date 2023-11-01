/* eslint-disable */
import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Racer from '../src/Racer.js';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
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
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[['pobi,javaji']], [['pobi,eastjun']]])(
    '이름에 대한 예외 처리',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    },
  );

  describe('입력', () => {
    describe('자동차 이름', () => {
      test.each([[['']], [['pobi,']], [['pobi,,woni']], [[',woni']]])(
        '빈값 예외 처리',
        async inputs => {
          mockQuestions(inputs);

          const app = new App();

          await expect(app.play()).rejects.toThrow('[ERROR]');
        },
      );

      test.each([[['helloworld']], [['pobi,helloworld']]])(
        '길이 예외 처리',
        async inputs => {
          mockQuestions(inputs);

          const app = new App();

          await expect(app.play()).rejects.toThrow('[ERROR]');
        },
      );

      test.each([[['pobi,pobi']], [['pobi,woni,pobi']]])(
        '중복 예외 처리',
        async inputs => {
          mockQuestions(inputs);

          const app = new App();

          await expect(app.play()).rejects.toThrow('[ERROR]');
        },
      );
    });

    describe('시도 횟수', () => {
      const inputs = [];

      beforeEach(() => {
        inputs.push('pobi,woni');
      });

      test('값이 없는 경우', async () => {
        inputs.push('');

        mockQuestions(inputs);

        const app = new App();

        await expect(app.play()).rejects.toThrow('[ERROR]');
      });

      test.each([['a'], ['1a'], ['1 a'], ['-1']])(
        '숫자가 아닌 경우',
        async input => {
          inputs.push(input);

          mockQuestions(inputs);

          const app = new App();

          await expect(app.play()).rejects.toThrow('[ERROR]');
        },
      );

      test('1 미만인 경우', async () => {
        inputs.push('0');

        mockQuestions(inputs);

        const app = new App();

        await expect(app.play()).rejects.toThrow('[ERROR]');
      });
    });
  });
});
