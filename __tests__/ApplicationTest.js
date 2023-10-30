import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import Car from '../src/Car.js';
import Validation from '../src/Validation.js';
import CarRacingGame from '../src/CarRacingGame.js';

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

  test('전진을 시도하는 메소드 (Car.goForward) 테스트', () => {
    const randoms = [0, 4, 9, 3, 5];
    const results = [0, 1, 2, 2, 3];
    mockRandoms([...randoms]);

    const car = new Car('test');

    results.forEach((result) => {
      car.goForward();
      expect(car.getDistance()).toBe(result);
    });
  });

  test('자동차의 이름 검증 (Validation.validateCarName) 테스트', () => {
    const passInputs = ['a', 'aaa', 'aaaaa'];
    const failInputs = ['', 'aaaaaa'];

    passInputs.forEach((input) => {
      expect(() => Validation.validateCarName(input)).not.toThrow();
    });

    failInputs.forEach((input) => {
      expect(() => Validation.validateCarName(input)).toThrow('[ERROR]');
    });
  });

  test('경주할 자동차 이름 중복 여부 검증 (Validation.validateDuplicateName) 테스트', () => {
    const passInput = ['a', 'b', 'c'];
    const failInput = ['a', 'a', 'b'];

    expect(() => Validation.validateDuplicateName(passInput)).not.toThrow();
    expect(() => Validation.validateDuplicateName(failInput)).toThrow(
      '[ERROR]',
    );
  });

  test('이동 횟수 검증 (Validation.validateTryCount) 테스트', () => {
    const passInputs = ['1', '123', '9999'];
    const failInputs = ['0', '-1', 'test', '1.2'];

    passInputs.forEach((input) => {
      expect(() => Validation.validateTryCount(input)).not.toThrow();
    });

    failInputs.forEach((input) => {
      expect(() => Validation.validateTryCount(input)).toThrow('[ERROR]');
    });
  });

  test('최종 우승자 구하기 (CarRacingGame.getWinner) 테스트', () => {
    const randoms = [9, 9, 9, 9, 0, 9, 9, 9, 9];
    const cars = ['kim', 'lee', 'park'];
    mockRandoms([...randoms]);

    const carRacingGame = new CarRacingGame();
    carRacingGame.setCars(cars.map((car) => new Car(car)));
    carRacingGame.goForward(3, () => {});

    expect(carRacingGame.getWinner()).toEqual(['kim', 'park']);
  });
});
