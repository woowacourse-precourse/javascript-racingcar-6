import Car from '../src/Car.js';

describe('자동차 동작 및 이름 생성 테스트', () => {
  test('5자 이하 이름은 자동차가 생성되는지 확인', () => {
    const car = new Car('TestCar');
    expect(car.name).toBe('TestCar');
  });

  test('전진했을때 위치값이 1증가해야한다.', () => {
    const car = new Car('TestCar');
    car.go();
    expect(car.position).toBe(1);
  });
});
