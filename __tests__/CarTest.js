import Car from "../src/Car";

describe('자동차 객체 ', () => {
  let car;

  beforeEach(() => {
    car = new Car('testCar');
  })

  test('자동차 클래스 이름과 위치 가져오기', () => {
    expect(car.getName()).toBe('testCar');
    expect(car.getPosition()).toBe('');
  });
  
  test('자동차 클래스 전진-멈춤 함수', () => {
    car.move(4);
    expect(car.getPosition()).toBe('-');

    car.move(3);
    expect(car.getPosition()).toBe('-');
  });

  test('자동차 클래스 현재 위치 함수', () => {
    expect(car.printPosition()).toBe('testCar : ');

    car.move(4);
    expect(car.printPosition()).toBe('testCar : -');
  });
});
