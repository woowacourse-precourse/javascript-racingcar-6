import Car from '../src/Car.js';

describe('Car Class 테스트', () => {
  test('Car 객체 반환 확인', () => {
    const newCar = new Car('pobi');
    expect(newCar).toBeTruthy();
  });

  test('Car 객체 name 확인', () => {
    const newCar = new Car('pobi');
    expect(newCar.name).toBe('pobi');
  });

  test('Car 객체 name 확인', () => {
    const newCar = new Car();
    expect(newCar.name).toBe(undefined);
  });

  test('Car 객체 position 확인', () => {
    const newCar = new Car('pobi');
    expect(newCar.position).toBe(0);
  });

  test('Car 객체 move 함수 동작 확인', () => {
    const newCar = new Car('pobi');
    newCar.move();
    newCar.move();
    expect(newCar.position).toBe(2);
  });
});
