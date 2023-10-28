import Car from '../src/Car.js';
import { MIN_MOVEMENT } from '../src/constants/constants.js';
import generateRandomNumber from '../src/functions/generateRandomNumber.js';

jest.mock('../src/functions/generateRandomNumber.js');

describe(`랜덤 숫자가 ${MIN_MOVEMENT}이상이면 전진, 미만이면 정지한다`, () => {
  test('랜덤 숫자가 0이면 정지한다', () => {
    generateRandomNumber.mockReturnValue(0);
    const car = new Car();
    const isMoved = car.move();
    expect(isMoved).toBe(false);
  });

  test('랜덤 숫자가 4이면 전진한다', () => {
    generateRandomNumber.mockReturnValue(4);
    const car = new Car();
    const isMoved = car.move();
    expect(isMoved).toBe(true);
  });

  test('랜덤 숫자가 9이면 전진한다', () => {
    generateRandomNumber.mockReturnValue(9);
    const car = new Car();
    const isMoved = car.move();
    expect(isMoved).toBe(true);
  });
});
