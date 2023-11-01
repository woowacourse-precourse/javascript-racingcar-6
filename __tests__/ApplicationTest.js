/* eslint-disable */
import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Racer from '../src/Racer.js';
import { input } from '../src/IO.js';

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

    test.each([[['pobi,woni', '1']], [['pobi,woni,hello', '1']]])(
      '정상 입력값',
      async inputs => {
        const logSpy = getLogSpy();

        mockQuestions(inputs);

        const app = new App();
        await app.play();

        expect(logSpy).toHaveBeenCalledWith(
          expect.stringContaining('실행 결과'),
        );
      },
    );
  });

  describe('레이싱', () => {
    const FORWARD = [4, 5, 6, 7, 8, 9];
    const STOP = [0, 1, 2, 3];

    test('사용자 입력한 자동차와 레이싱 자동차 비교', async () => {
      mockQuestions(['pobi,woni', '1']);
      const carNames = await input.carNames();
      const tryCount = await input.tryCount();

      const app = new App();
      const racers = app.runRace(carNames, tryCount);

      const expectedRacers = [new Racer('pobi'), new Racer('woni')];

      expect(racers.length).toBe(2);
      expect(racers).toEqual(expect.arrayContaining(expectedRacers));
    });

    describe('랜덤 값에 따른 전진-정지', () => {
      test('0~3: 정지', async () => {
        mockQuestions(['pobi', `${STOP.length}`]);
        mockRandoms([...STOP]);

        const carNames = await input.carNames();
        const tryCount = await input.tryCount();

        const app = new App();
        const racers = app.runRace(carNames, tryCount);

        expect(racers[0].move).toBe(0);
      });

      test('4~9: 전진', async () => {
        mockQuestions(['pobi', `${FORWARD.length}`]);
        mockRandoms([...FORWARD]);

        const carNames = await input.carNames();
        const tryCount = await input.tryCount();

        const app = new App();
        const racers = app.runRace(carNames, tryCount);

        expect(racers[0].move).toBe(FORWARD.length);
      });
    });

    describe('우승자', () => {
      test('우승자가 한 명인 경우', async () => {
        mockQuestions(['pobi,woni', '1']);
        mockRandoms([FORWARD[0], STOP[0]]);

        const carNames = await input.carNames();
        const tryCount = await input.tryCount();

        const app = new App();
        const racers = app.runRace(carNames, tryCount);
        const winners = app.getWinnerNames(racers);

        expect(winners.length).toBe(1);
        expect(winners).toEqual(expect.arrayContaining(['pobi']));
      });

      test('우승자가 여러 명인 경우', async () => {
        mockQuestions(['pobi,woni', '1']);
        mockRandoms([FORWARD[0], FORWARD[0]]);

        const carNames = await input.carNames();
        const tryCount = await input.tryCount();

        const app = new App();
        const racers = app.runRace(carNames, tryCount);
        const winners = app.getWinnerNames(racers);

        expect(winners.length).toBe(2);
        expect(winners).toEqual(expect.arrayContaining(['pobi', 'woni']));
      });
    });
  });

  describe('출력', function () {
    const FORWARD = 4;
    const STOP = 3;
    function makeOutput(carName, move) {
      return `${carName} : ${'-'.repeat(move)}`;
    }
    test.each([
      {
        carName: 'pobi',
        count: '1',
        randoms: [FORWARD],
      },
      {
        carName: 'pobi',
        count: '1',
        randoms: [FORWARD, STOP],
      },
      {
        carName: 'pobi',
        count: '2',
        randoms: [FORWARD, FORWARD],
      },
      {
        carName: 'pobi',
        count: '3',
        randoms: [FORWARD, STOP, FORWARD],
      },
    ])('자동차 상태 출력', async ({ carName, count, randoms }) => {
      const logSpy = getLogSpy();

      mockQuestions([carName, count]);
      mockRandoms(randoms);

      const carNames = await input.carNames();
      const tryCount = await input.tryCount();

      const app = new App();
      app.runRace(carNames, tryCount);

      let moveCount = 0;

      randoms.forEach(random => {
        if (random >= FORWARD) moveCount += 1;
        expect(logSpy).toHaveBeenCalledWith(
          expect.stringContaining(makeOutput(carName, moveCount)),
        );
      });
    });
  });
});
