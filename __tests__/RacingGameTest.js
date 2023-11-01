import Car from '../src/Car';
import RacingGame from '../src/RacingGame';
import { Random, Console } from '@woowacourse/mission-utils';

const mockQuestions = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('hasDuplicateCarName 함수 테스트', () => {
  test('중복될 때 예외 처리', () => {
    // given
    const cars = [];
    const carNames = ['name1', 'name2', 'name3'];
    const newCarName = 'name1';

    for (const carName of carNames) {
      const car = new Car(carName);
      cars.push(car);
    }

    const racingGame = new RacingGame(cars);

    // when
    const result = () => racingGame.hasDuplicateCarName(newCarName);

    // then
    expect(result).toThrow();
  });

  test('중복되지 않을 때 false를 반환', () => {
    // given
    const cars = [];
    const carNames = ['name1', 'name2', 'name3'];
    const newCarName = 'name4';

    for (const carName of carNames) {
      const car = new Car(carName);
      cars.push(car);
    }

    const racingGame = new RacingGame(cars);

    // when
    const result = racingGame.hasDuplicateCarName(newCarName);

    // then
    expect(result).toBeFalsy();
  });
});

describe('getCarNames 함수 테스트', () => {
  describe('문제 있을 때 예외 처리', () => {
    const invailInputs = ['seung,seung,seug', 'seung,seungthae,kim,123456'];

    invailInputs.forEach((input) => {
      test(`테스트 케이스 ${input}`, async () => {
        mockQuestions(input);
        const racingGame = new RacingGame();

        const result = () => racingGame.getCarNames();

        await expect(result).rejects.toThrow();
      });
    });
  });

  describe('문제 없을 때 정상 동작 확인', () => {
    const vaildInputs = ['kin, seung, thae'];

    vaildInputs.forEach((input) => {
      test(`테스트 케이스 ${input}`, async () => {
        mockQuestions(input);
        const racingGame = new RacingGame();

        const result = racingGame.getCarNames();

        await expect(result).resolves.not.toThrow();
      });
    });
  });
});
