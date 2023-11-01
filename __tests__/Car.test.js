import Car from '../src/Car.js';
import { MIN_MOVEMENT } from '../src/constants/carMovementConstants.js';

describe(`랜덤 숫자가 ${MIN_MOVEMENT}이상이면 전진, 미만이면 정지한다`, () => {
  test.each([
    [0, '정지', ''],
    [4, '전진', '-'],
    [9, '전진', '-'],
  ])(
    '랜덤 숫자가 %d이면 %s한다 (결과: "%s")',
    (randomNumber, description, expected) => {
      const car = new Car();
      car.move(randomNumber);
      expect(car.movement).toBe(expected);
    },
  );
});
