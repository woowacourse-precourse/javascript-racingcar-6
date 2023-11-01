import repeatFunctionNTimes from '../src/utils/repeatFunctionNTimes.js';
import createHyphenString from '../src/utils/createHyphenString.js';
import {
  valiadateDuplicteName,
  hasDuplicate,
  validateCountNumber,
  validateCarName,
} from './../src/utils/validateValue.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/models/Car.js';
import RaceManager from '../src/models/RaceManager.js';
import ERROR_MESSAGE from '../src/consts/errorMessage.js';

const { CAR, MOVECOUNT } = ERROR_MESSAGE;
const { NOT_A_NUMBER, NOT_AN_INTEGER, NEGATIVE_NUMBER, ZERO_NUMBER } =
  MOVECOUNT;
const { EMPTY_NAME, NAME_TOO_LONG, DUPLICATE_NAME } = CAR;

//utils
describe('repeatFunctionNTimes', () => {
  test('첫번째 인자로 넣은 숫자 만큼 호출이 되어야 한다.', () => {
    const mockFunction = jest.fn();
    const n = 5;

    repeatFunctionNTimes(n, mockFunction);
    expect(mockFunction).toHaveBeenCalledTimes(n);
  });
});

describe('calculateLongestDistance', () => {
  test('가장 긴 길이를 구할 수 있어야 한다.', () => {
    //given
    const carModels = [
      new Car('seorim'),
      new Car('eunjeong'),
      new Car('sukjoon'),
    ];
    MissionUtils.Random.pickNumberInRange = jest.fn();
    MissionUtils.Random.pickNumberInRange.mockReturnValue(4);
    carModels[0].move();
    const raceManager = new RaceManager(carModels);
    const result = raceManager.calculateLongestDistance();
    expect(result).toBe(1);
  });
});

describe('hasDuplicate', () => {
  test('배열에 중복이 있는지 검증이 되어야 한다.', () => {
    //given
    const input1 = [1, 1, 2];
    const input2 = [1, 2, 3];

    const result1 = hasDuplicate(input1);
    expect(result1).toBe(true);

    const result2 = hasDuplicate(input2);
    expect(result2).toBe(false);
  });
});

//Model Method
describe('Car Model', () => {
  let car;
  beforeEach(() => {
    car = new Car('TestCar');
    MissionUtils.Random.pickNumberInRange = jest.fn();
  });

  test('랜덤 숫자를 구한 후 그 값이 4 이상일 때 전진한다.', () => {
    MissionUtils.Random.pickNumberInRange.mockReturnValue(4);
    const initialPosition = car.getPosition();
    car.move();
    expect(car.getPosition()).toBe(initialPosition + 1);
  });

  test('랜덤 숫자를 구한 후 그 값이 4 미만일 때 전진하지 않는다.', () => {
    MissionUtils.Random.pickNumberInRange.mockReturnValue(3);
    const initialPosition = car.getPosition();
    car.move();
    expect(car.getPosition()).toBe(initialPosition);
  });
});

// Error Unit Test : CarList
describe('valiadateDuplicteName', () => {
  test('car 이름은 중복이 불가하다.', () => {
    const carList = ['car1', 'car2', 'car1'];
    expect(() => valiadateDuplicteName(carList)).toThrow(DUPLICATE_NAME);
  });

  test('중복이 없는 car 이름이면 테스트를 통과한다.', () => {
    const carList = ['car1', 'car2', 'car3'];
    expect(() => valiadateDuplicteName(carList)).not.toThrow();
  });
});

describe('validateCountNumber', () => {
  test('정수가 아닌 입력에 대해 에러를 던진다.', () => {
    expect(() => validateCountNumber('2.5')).toThrow(NOT_AN_INTEGER);
  });

  test('음수 입력에 대해 에러를 던져야 한다.', () => {
    expect(() => validateCountNumber(-2)).toThrow(NEGATIVE_NUMBER);
  });

  test('숫자가 아닌 입력에 대해 에러를 던져야 한다.', () => {
    expect(() => validateCountNumber('abc')).toThrowError(NOT_A_NUMBER);
  });

  test('0 입력에 대해 에러를 던져야 한다.', () => {
    expect(() => validateCountNumber(0)).toThrow(ZERO_NUMBER);
  });

  test('유효한 입력에 대해 에러를 던지지 않는다.', () => {
    expect(() => validateCountNumber(3)).not.toThrow();
  });
});

// Error Unit Test : CarList
describe('Car Name의 에러를 검증한다.', () => {
  test('빈 값을 입력했을때 에러를 던져야한다.', () => {
    expect(() => validateCarName('')).toThrow(EMPTY_NAME);
  });
  test('5자 초과의 이름이 있을때 에러를 던져야한다.', () => {
    expect(() => validateCarName('123456')).toThrow(NAME_TOO_LONG);
  });
});

describe('createHyphenString', () => {
  test('지정된 길이에 따라 올바른 문자열을 반환해야 한다.', () => {
    expect(createHyphenString(0)).toBe('');
    expect(createHyphenString(1)).toBe('-');
    expect(createHyphenString(5)).toBe('-----');
    expect(createHyphenString(10)).toBe('----------');
  });
});
