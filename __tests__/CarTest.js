import Car from '../src/domain/Car';

describe('자동차 테스트', () => {
  test('forward 메서드가 실행되면 Car 객체의 position이 1 증가해야 한다.', () => {
    const car = new Car('aa');
    car.forward();

    expect(car.position).toBe(1);
  });
});