import { Car } from '../src/Car';

describe('Car객체가 생성되는지 확인하는 테스트', () => {
  test('Car객체가 생성되는지 확인하는 테스트', () => {
    const car = new Car('test');
    expect(car.name).toBe('test');
    expect(car.position).toBe(0);
  });
});
