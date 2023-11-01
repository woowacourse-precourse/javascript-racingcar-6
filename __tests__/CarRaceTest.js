import { Random } from '@woowacourse/mission-utils';
import Car from '../src/game/Car';
import { MOVE_NUMBER } from '../src/utils/constants';

describe('Car', () => {
  test('랜덤값이 4이상일 경우 move()', () => {
    const car = new Car('TestCar');
    const initialPosition = car.getPosition();

    Random.pickNumberInRange = jest.fn(() => MOVE_NUMBER);

    car.move();

    expect(car.getPosition()).toBe(initialPosition + 1);
  });

  test('랜덤값이 4이하일 경우 move()', () => {
    const car = new Car('TestCar');
    const initialPosition = car.getPosition();

    Random.pickNumberInRange = jest.fn(() => MOVE_NUMBER - 1);

    car.move();

    expect(car.getPosition()).toBe(initialPosition);
  });

  test('getPosition()의 자동차 현재 위치 반환', () => {
    const car = new Car('TestCar');
    const position = car.getPosition();

    expect(position).toBe(0);
  });

  test('getName()의 자동차 이름 반환', () => {
    const car = new Car('TestCar');
    const name = car.getName();

    expect(name).toBe('TestCar');
  });
});
