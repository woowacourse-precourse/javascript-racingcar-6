import Car from '../src/models/Car.js';

describe('Car 클래스 기능 테스트', () => {
  // given
  const TEST_CAR_NAME = 'woong';
  let testCar;

  beforeEach(() => {
    // when
    testCar = new Car(TEST_CAR_NAME);
  });

  test('car 인스턴스를 생성', () => {
    // then
    expect(testCar).toBeInstanceOf(Car);
  });

  test('getCarName 메서드는 자동차 이름을 반환', () => {
    // when
    const carName = testCar.getCarName();

    // then
    expect(carName).toBe(TEST_CAR_NAME);
  });

  test('car 인스턴스의 초기 위치는 0', () => {
    // when
    const initialCarPosition = testCar.getCarPosition();

    // then
    expect(initialCarPosition).toBe(0);
  });

  test('moveCar 메서드가 호출 되면, car 인스턴스의 위치가 1씩 증가', () => {
    // when
    testCar.moveCar();
    // then
    expect(testCar.getCarPosition()).toBe(1);

    // when
    testCar.moveCar();
    // then
    expect(testCar.getCarPosition()).toBe(2);
  });
});
