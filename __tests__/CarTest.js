import Car from '../src/Car.js';

describe('Car 클래스 테스트', () => {
  let car;

  beforeEach(() => {
    car = new Car('test');
  });

  test('Car 객체가 정상적으로 생성되는지 테스트', () => {
    expect(car.name).toBe('test');
    expect(car.racing).toBe('');
  });

  test('updateRacingStatus 메소드가 정상적으로 작동하는지 테스트', () => {
    car.updateRacingStatus();
    expect(car.racing).toBe('-');
  });

  test('getRacingLength 메소드가 정상적으로 작동하는지 테스트', () => {
    expect(car.getRacingLength()).toBe(0);
    car.updateRacingStatus();
    expect(car.getRacingLength()).toBe(1);
  });
});
