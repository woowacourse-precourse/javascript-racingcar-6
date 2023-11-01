import Car from '../RacingCar/Car.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { validateCarName } from '../validations/validateCarName.js';
import { IN_GAME_ERROR } from '../src/constants.js';

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

describe('Car 객체에 대한 함수, 메서드 및 유효성 검증 테스트', () => {
  test('자동차 이름 입력값에 대한 공백 제거 및 배열화 처리', () => {
    const car = new Car();
    expect(car.filterInputCarNameList(',,Drive,  ,,,   woW  ,  38Js,')).toEqual([
      'Drive',
      'woW',
      '38Js',
    ]);
  });

  test('자동차 이름 입력값에 대한 검증', () => {
    expect(() => validateCarName([])).toThrow(IN_GAME_ERROR.invalidInputCarName.emptyInput);
    expect(() => validateCarName([''])).toThrow(
      IN_GAME_ERROR.invalidInputCarName.outOfRangeNumbers,
    );
    expect(() => validateCarName(['drive'])).toThrow(
      IN_GAME_ERROR.invalidInputCarName.outOfRangeNumbers,
    );
    expect(() =>
      validateCarName([
        'race1',
        'race2',
        'race3',
        'race4',
        'race5',
        'race6',
        'race7',
        'race8',
        'race9',
        'race0',
      ]),
    ).toThrow(IN_GAME_ERROR.invalidInputCarName.outOfRangeNumbers);
    expect(() => validateCarName(['race1', 'race2', 'race1'])).toThrow(
      IN_GAME_ERROR.invalidInputCarName.duplicatedCarName,
    );
    expect(() => validateCarName(['Race1', 'race!'])).toThrow(
      IN_GAME_ERROR.invalidInputCarName.invalidCarNameFormat,
    );
    expect(() => validateCarName(['Race1', 'Ra ce'])).toThrow(
      IN_GAME_ERROR.invalidInputCarName.invalidCarNameFormat,
    );
    expect(() => validateCarName(['Race1', 'Race10'])).toThrow(
      IN_GAME_ERROR.invalidInputCarName.invalidCarNameFormat,
    );
    expect(() => validateCarName(['Race1', '2raCE', 'Drive'])).not.toThrow('[ERROR]');
  });

  test('자동차 이름 입력값의 객체화 처리', () => {
    const car = new Car();
    expect(car.carNameListToObject(['Race1', '2raCE', 'Drive'])).toEqual({
      Race1: 0,
      '2raCE': 0,
      Drive: 0,
    });
  });

  test('경주 중 자동차별 이동 및 출력 처리', () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const input = {
      alpha: 3,
      beta: 5,
      delta: 2,
      eta: 0,
    };
    const output = 'alpha : ----\nbeta : -----\ndelta : --\neta : -\n';
    const randoms = [MOVING_FORWARD, STOP, STOP, MOVING_FORWARD];
    const logSpy = getLogSpy();

    const car = new Car();
    car.carList = input;
    const carListObject = car.getCarListObject();

    mockRandoms([...randoms]);
    car.tryMovingCar(carListObject);
    car.printCarPosition(carListObject);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
