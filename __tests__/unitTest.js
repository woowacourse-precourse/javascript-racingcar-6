import { repeatFunctionNTimes } from '../src/utils/repeatFunctionNTimes.js';
import { calculateLongestDistance } from './../src/utils/calculateLongestDistance.js';
import {
  valiadateDuplicteName,
  hasDuplicate,
  validateCountNumber,
  validateCarName,
} from './../src/utils/validateValue.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/models/Car';

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
      { carName: 'seorim', position: '---' },
      { carName: 'eunjeong', position: '--' },
      { carName: 'sukjoon', position: '-' },
    ];

    const result = calculateLongestDistance(carModels);
    expect(result).toBe(3);
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
  test('랜덤 숫자를 구한 후 그 값이 4 이상일 때 전진한다.', () => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    MissionUtils.Random.pickNumberInRange.mockReturnValue(4);
    const car = new Car('TestCar');
    car.move();
    expect(car.position).toBe('-');
  });
});

// Error Unit Test : CarList
describe('valiadateDuplicteName', () => {
  test('car 이름은 중복이 불가하다.', () => {
    const carList = ['car1', 'car2', 'car1'];
    expect(() => valiadateDuplicteName(carList)).toThrow(
      '[ERROR] car 이름은 중복이 불가합니다.',
    );
  });

  test('중복이 없는 car 이름이면 테스트를 통과한다.', () => {
    const carList = ['car1', 'car2', 'car3'];
    expect(() => valiadateDuplicteName(carList)).not.toThrow();
  });
});

describe('validateCountNumber', () => {
  test('정수가 아닌 입력에 대해 에러를 던진다.', () => {
    expect(() => validateCountNumber('2.5')).toThrow(
      '[ERROR] 정수를 입력해주세요.',
    );
  });

  test('음수 입력에 대해 에러를 던져야 한다.', () => {
    expect(() => validateCountNumber(-2)).toThrow(
      '[ERROR] 음수를 입력할 수 없습니다.',
    );
  });

  test('숫자가 아닌 입력에 대해 에러를 던져야 한다.', () => {
    expect(() => validateCountNumber('abc')).toThrowError(
      '[ERROR] 숫자를 입력해주세요.',
    );
  });

  test('0 입력에 대해 에러를 던져야 한다.', () => {
    expect(() => validateCountNumber(0)).toThrow(
      '[ERROR] 1이상의 숫자를 입력해주세요.',
    );
  });

  test('유효한 입력에 대해 에러를 던지지 않는다.', () => {
    expect(() => validateCountNumber(3)).not.toThrow();
  });
});

// Error Unit Test : CarList
describe('Car Name의 에러를 검증한다.', () => {
  test('빈 값을 입력했을때 에러를 던져야한다.', () => {
    expect(() => validateCarName('')).toThrow(
      '[ERROR] car 이름은 비워 둘 수 없습니다.',
    );
  });
  test('5자 초과의 이름이 있을때 에러를 던져야한다.', () => {
    expect(() => validateCarName('123456')).toThrow(
      '[ERROR] car 이름은 5자 이하만 가능합니다.',
    );
  });
});
