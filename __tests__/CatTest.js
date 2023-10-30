import RacingCar from '../src/RacingCar';

describe('RacingCar의 move 메소드 테스트', () => {
  test('랜덤 숫자가 4 미만이면 위치는 그대로 유지', () => {
    const car = new RacingCar('Car1');

    car.move(3);

    expect(car.getPosition()).toBe(0);
  });

  test('랜덤 숫자가 4 이상이면 위치가 1 증가', () => {
    const car = new RacingCar('Car1');

    car.move(4);

    expect(car.getPosition()).toBe(1);
  });
});
