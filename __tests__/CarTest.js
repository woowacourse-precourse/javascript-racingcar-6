import Car from '../src/module/Car.js';

describe('Car 클래스 테스트', () => {
  test('name의 getter, setter 테스트', () => {
    const car1 = new Car();

    car1.name = 'aaaaa';
    expect(car1.name).toEqual('aaaaa');
    expect(() => {
      car1.name = 'bbbbbb';
    }).toThrow('[ERROR]');
  });
});
