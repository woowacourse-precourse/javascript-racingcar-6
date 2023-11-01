/* eslint-disable max-lines-per-function */
import Car from '../../src/model/Car.js';

describe('자동차 이름 및 위치 테스트', () => {
  test('자동차 이름 생성 가능 여부', () => {
    const car = new Car('Tesla');
    expect(car.getName()).toBe('Tesla');
  });

  test('시작 위치가 0으로 설정 여부', () => {
    const car = new Car('Tesla');
    expect(car.getPosition()).toBe(0);
  });

  test('전진 메서드 호출 시 위치 +1 가능 여부', () => {
    const car = new Car('Tesla');
    car.moveForward();
    expect(car.getPosition()).toBe(1);
  });
});
