import Car from '../src/Car.js';
import { Random } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('Car클래스의 move메소드', () => {
  test('random number가 4~9일때 movingCount값이 증가해야 한다.', () => {
    const car = new Car('pobi');
    const randomNumber = [4, 5, 6, 7, 8, 9];
    mockRandoms([...randomNumber]);
    randomNumber.forEach(() => {
      car.move();
    });
    expect(car.getMovingCount()).toBe(randomNumber.length);
  });

  test('random number가 1~3일때 movingCount값은 증가하지 않아야함.', () => {
    const car = new Car('pobi');
    const randomNumber = [1, 2, 3, 1, 2, 3];
    mockRandoms([...randomNumber]);
    randomNumber.forEach(() => {
      car.move();
    });
    expect(car.getMovingCount()).toBe(0);
  });
});
