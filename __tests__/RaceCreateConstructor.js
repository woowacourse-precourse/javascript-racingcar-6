import { Race } from '../src/Race.js';
import { Car } from '../src/Car.js';

describe('Race객체가 생성되는지 확인하는 테스트', () => {
  test('Race객체가 생성되는지 확인하는 테스트', () => {
    const cars = [new Car('carA'), new Car('carB'), new Car('carC')];
    const race = new Race(cars);

    expect(race).toBeInstanceOf(Race);
    expect(race.cars).toEqual(cars);
  });
});
