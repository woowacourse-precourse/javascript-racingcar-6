import Car from '../src/Car.js';
import { MIN_MOVEMENT } from '../src/constants/constants.js';
import generateRandomNumber from '../src/functions/generateRandomNumber.js';

jest.mock('../src/functions/generateRandomNumber.js');

describe(`랜덤 숫자가 ${MIN_MOVEMENT}이상이면 전진, 미만이면 정지한다`, () => {
  test.each([
    [0, '정지', false],
    [4, '전진', true],
    [9, '전진', true],
  ])('랜덤 숫자가 %d이면 %s한다', (randomNumber, description, expected) => {
    generateRandomNumber.mockReturnValue(randomNumber);
    const car = new Car();
    const isMoved = car.move();
    expect(isMoved).toBe(expected);
  });
});
