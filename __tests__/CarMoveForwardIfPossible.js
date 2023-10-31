import { Car } from '../src/Car';
import { Random } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils');

describe('moveForwardIfPossible 함수 테스트', () => {
  test('랜덤값이 4이상일때 position이 움직이는지', () => {
    const car = new Car('test');
    Random.pickNumberInRange.mockReturnValue(4);
    car.moveForwardIfPossible();
    expect(car.position).toBe(1);
  });

  test('랜덤값이 4미만일때 position이 그대로인지', () => {
    const car = new Car('test');
    Random.pickNumberInRange.mockReturnValue(3);
    car.moveForwardIfPossible();
    expect(car.position).toBe(0);
  });
});
