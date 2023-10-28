import { repeatFunctionNTimes } from '../src/utils/repeatFunctionNTimes.js';
import { calculateLongestDistance } from './../src/utils/calculateLongestDistance.js';
import { hasDuplicate } from './../src/utils/validateValue.js';
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
