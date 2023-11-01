import Car from '../RacingCar/Car.js';
import { validateCarName } from '../validations/validateCarName.js';
import { IN_GAME_ERROR } from '../src/constants.js';

describe('Car 객체에 대한 함수, 메서드 및 유효성 검증 테스트', () => {
  const car = new Car();

  test('자동차 이름 입력값에 대한 공백 제거 및 배열화 처리', () => {
    expect(car.#filterInputCarNameList(',,Drive,  ,,,   woW  ,  38Js,')).toEqual([
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
    expect(car.carNameListToObject(['Race1', '2raCE', 'Drive'])).toEqual({
      Race1: 0,
      '2raCE': 0,
      Drive: 0,
    });
  });
});
