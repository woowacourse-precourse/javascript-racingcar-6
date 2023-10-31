import { Car } from '../src/Car';

describe('displayPosition 함수 테스트', () => {
  test('position에 맞게  - 가 출력되는지 [움직임 없을때]', () => {
    const car = new Car('test');
    expect(car.displayPosition()).toBe('');
  });
  test('position에 맞게  - 가 출력되는지 [움직임 있을때]', () => {
    const car = new Car('test');
    car.position = 2;
    expect(car.displayPosition()).toBe('--');
  });
});
