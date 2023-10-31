/* eslint-disable max-lines-per-function */
import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import Car from '../src/model/Car.js';

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
  test.each([[[4, 3]], [[5, 2]], [[8, 3]]])('전진-정지', async (randoms) => {
    // given
    const inputs = ['pobi,woni', '1'];
    const outputs = ['pobi : -'];
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

  test.each([[['pobi,java', '1,']], [['pobi,east', 'two']]])(
    '시도 횟수에 대한 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    },
  );

  describe('최종 우승자 출력', () => {
    test.each([[[4, 3]], [[5, 2]], [[8, 3]]])(
      '우승자가 한명일 때',
      async (randoms) => {
        // given
        const inputs = ['pobi,woni', '1'];
        const outputs = ['최종 우승자 : pobi'];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([...randoms]);

        // when
        const app = new App();
        await app.play();

        // then
        outputs.forEach((output) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(output));
        });
      },
    );

    test.each([[[4, 4]], [[5, 5]], [[8, 8]]])(
      '최종 우승자가 두명일 때',
      async (randoms) => {
        // given
        const inputs = ['pobi,woni', '1'];
        const outputs = ['최종 우승자 : pobi, woni'];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([...randoms]);

        // when
        const app = new App();
        await app.play();

        // then
        outputs.forEach((output) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(output));
        });
      },
    );
  });

  describe('Car', () => {
    test('getName() test', () => {
      // given
      const carNameList = ['kim', 'park', 'choi'];
      const carList = carNameList.map((carName) => new Car(carName));

      // when
      const resultList = carList.map((car) => car.getName());

      // then
      carList.forEach((car, idx) => {
        expect(car.getName()).toBe(resultList[idx]);
      });
    });

    test('oneStepForward() test', () => {
      // given
      const car = new Car('kim');

      // when
      car.oneStepForward();
      car.oneStepForward();
      car.oneStepForward();

      // then
      expect(car.getDistance()).toBe(3);
    });
  });
});
