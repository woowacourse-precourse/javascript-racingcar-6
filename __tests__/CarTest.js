import Car from '../src/game/Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

MissionUtils.Random.pickNumberInRange = jest.fn();

describe('Car', () => {
  let car;

  beforeEach(() => {
    car = new Car('TestCar');
  });

  test('move : 4이상의 숫자 position +1', async () => {
    MissionUtils.Random.pickNumberInRange.mockReturnValue(4);

    await car.move();
    expect(car.position).toBe(1);
  });

  test('move : 3이하의 숫자 position +0', async () => {
    MissionUtils.Random.pickNumberInRange.mockReturnValue(3);

    await car.move();
    expect(car.position).toBe(0);
  });

  test('getPosition : ', async () => {
    car.position = 3;
    const positionString = await car.getPosition();
    expect(positionString).toBe('---');
  });

});