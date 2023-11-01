import Car from '../src/Car.js';

describe('Car 클래스', () => {
  let car;

  beforeEach(() => {
    car = new Car({ initialState: { name: 'phobi', position: 0 } });
  });

  test("'forward' 메소드가 정상적으로 실행되는지 테스트", () => {
    car.forward();

    expect(car.state.position).toBe(1);
  });

  test("'validationState' 메소드가 정상적으로 동작하는지 테스트", () => {
    expect(() => {
      new Car({ initialState: { name: 'longnameexceeds5', position: 0 } });
    }).toThrow('[ERROR] 이름이 잘못된 형식입니다.');

    expect(() => {
      new Car({ initialState: { name: 'phobi', position: -1 } });
    }).toThrow('[ERROR] 위치 값이 잘못된 형식입니다.');
  });
});
