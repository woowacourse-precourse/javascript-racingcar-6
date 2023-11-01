import { CONSTANTS } from '../../src/constants/index.js';
import Car from '../../src/models/Car.js';

describe('Car 클래스 테스트', () => {
  test('Car 인스턴스 생성 확인', () => {
    // when
    const car = new Car('Test Car');

    // then
    expect(car).toBeInstanceOf(Car);
    expect(car.name).toBe('Test Car');
  });

  test('move 메서드가 shouldCarMove에 따라 position을 증가시키는지 확인', () => {
    // when
    const car = new Car('Car1');
    const initialPosition = car.getPosition();

    // when
    Car.shouldCarMove = jest.fn().mockReturnValue(true);
    car.move();
    car.move();

    // then
    expect(car.getPosition()).toBe(initialPosition + 2);

    // when
    Car.shouldCarMove = jest.fn().mockReturnValue(false); // shouldCarMove가 항상 false를 반환하도록 설정
    car.move();

    // then
    expect(car.getPosition()).toBe(initialPosition + 2); // position은 변화하지 않아야 함
  });

  test('getPosition 메서드가 현재 position을 반환하는지 확인', () => {
    // given
    const position = 3;

    // when
    const car = new Car('Car1');
    Car.shouldCarMove = jest.fn().mockReturnValue(true);

    for (let i = 0; i < position; i++) {
      car.move();
    }

    // then
    expect(car.getPosition()).toBe(position);
  });
});
