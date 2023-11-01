import Car from '../src/Car';
import RacingGame from '../src/RacingGame';
import { Random, Console } from '@woowacourse/mission-utils';

const mockQuestions = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
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
    const invalidlInputs = ['seung,seung,seug', 'seung,seungthae,kim,123456'];

    invalidlInputs.forEach((input) => {
      test(`테스트 케이스 ${input}`, async () => {
        mockQuestions(input);
        const racingGame = new RacingGame();

        const result = () => racingGame.getCarNames();

        await expect(result).rejects.toThrow();
      });
    });
  });

  describe('문제 없을 때 정상 동작 확인', () => {
    const validInputs = ['kin, seung, thae'];

    validInputs.forEach((input) => {
      test(`테스트 케이스 ${input}`, async () => {
        mockQuestions(input);
        const racingGame = new RacingGame();

        const result = racingGame.getCarNames();

        await expect(result).resolves.not.toThrow();
      });
    });
  });
});

describe('isValidMoveCount 함수 테스트', () => {
  describe('적합한 숫자가 아닌 경우 예외 처리', () => {
    const invaildInputs = [
      '0',
      '-1',
      '10회',
      'five time',
      '30번',
      '5.5',
      '0.03',
    ];

    invaildInputs.forEach((input) => {
      test(`테스트 케이스 ${input}`, () => {
        const racingGame = new RacingGame();

        const result = () => racingGame.isValidMoveCount(input);

        expect(result).toThrow();
      });
    });
  });

  describe('적합한 숫자인 경우 정상 동작 확인', () => {
    const vaildInputs = ['10', '959', '2014', '9999'];

    vaildInputs.forEach((input) => {
      test(`테스트 케이스 ${input}`, () => {
        const racingGame = new RacingGame();

        const result = racingGame.isValidMoveCount(input);

        expect(result).toBeTruthy();
      });
    });
  });
});

describe('getMoveCount 함수 테스트', () => {
  describe('문제 있을 때 예외 처리', () => {
    const invalidlInputs = ['-1', '10번', '2.5', '0', '3, 462'];

    invalidlInputs.forEach((input) => {
      test(`테스트 케이스 ${input}`, async () => {
        mockQuestions(input);
        const racingGame = new RacingGame();

        const result = () => racingGame.getMoveCount();

        await expect(result).rejects.toThrow();
      });
    });
  });

  const validInputs = ['1', '10'];

  describe('문제 없을 때 정상 동작 확인', () => {
    validInputs.forEach((input) => {
      test(`테스트 케이스 ${input}`, async () => {
        mockQuestions(input);
        const racingGame = new RacingGame();

        const result = racingGame.getMoveCount();

        await expect(result).resolves.not.toThrow();
      });
    });
  });
});

test('moveCars 함수 테스트', () => {
  const randoms = [4, 8];
  mockRandoms(randoms);
  const car1 = new Car('car1', 2);
  const car2 = new Car('car2');
  const racingGame = new RacingGame([car1, car2], 1);
  const outputs = ['실행 결과', 'car1 : ---', 'car2 : -'];
  const logSpy = getLogSpy();

  racingGame.moveCars();

  outputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test('printRaceProgress 함수 테스트', () => {
  const car1 = new Car('car1', 2);
  const car2 = new Car('car2');
  const racingGame = new RacingGame([car1, car2]);
  const outputs = ['car1 : --', 'car2 : '];
  const logSpy = getLogSpy();

  racingGame.printRaceProgress();

  outputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test('printWinners 함수 테스트', () => {
  const racingGame = new RacingGame([], 0, ['car1', 'car2']);
  const output = '최종 우승자 : car1, car2';
  const logSpy = getLogSpy();

  racingGame.printWinners();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
});

test('findWinners 함수 테스트', () => {
  const car1 = new Car('car1', 3);
  const car2 = new Car('car2', 3);
  const racingGame = new RacingGame([car1, car2]);
  const output = '최종 우승자 : car1, car2';
  const logSpy = getLogSpy();

  racingGame.findWinners();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
});
