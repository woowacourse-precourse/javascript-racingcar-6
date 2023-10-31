import Car from '../src/module/Car.js';

describe('Car 클래스 테스트', () => {
  test('name의 getter, setter 테스트', () => {
    const car = new Car();

    car.name = 'aaaaa';

    expect(car.name).toEqual('aaaaa');
    expect(() => {
      car.name = 'bbbbbb';
    }).toThrow('[ERROR]');
  });

  test('goingCount의 getter, setter 테스트', () => {
    const car = new Car();

    car.goingCount = true;

    expect(car.goingCount).toEqual(1);
    expect(() => {
      car.goingCount = 1;
    }).toThrow('[ERROR]');
  });
});
