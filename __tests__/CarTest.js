import { Random } from '@woowacourse/mission-utils';
import Car from '../src/Car.js';

const CAR_NAME = 'Car1';
const MOVING_FORWARD = 4;
const STOP = 3;

Random.pickNumberInRange = jest.fn();

describe('Car', () => {
  test('무작위 값이 4 이상일 때, 자동차는 전진한다.', () => {
    Random.pickNumberInRange.mockReturnValue(MOVING_FORWARD);

    const car = new Car(CAR_NAME);

    car.move();

    expect(car.position).toBe(1);
  });
  test('무작위 값이 4 미만일 때, 자동차는 멈춘다.', () => {
    Random.pickNumberInRange.mockReturnValue(STOP);

    const car = new Car(CAR_NAME);

    car.move();

    expect(car.position).toBe(0);
  });
});
