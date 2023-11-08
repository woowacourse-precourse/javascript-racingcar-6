import Car from '../src/Car.js';
import { mockRandoms } from '../testUtils/index.js';

describe('자동차 게임:자동차 테스트', () => {
  test('자동차 이름', () => {
    const name = 'pobi';
    const car = new Car(name);
    expect(car.name).toBe(name);
  });

  test('자동차 전진', () => {
    const car = new Car('pobi');
    mockRandoms([3]);
    car.handleMovement();
    expect(car.movement.length).toBe(0);
    mockRandoms([4]);
    car.handleMovement();
    expect(car.movement.length).toBe(1);
  });
});
