import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/Car.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('자동차 전진위한 임의의 값 선정 테스트', () => {
  test('임의의 값이 0에서 9사이인지 확인', () => {
    const car = new Car('myCar');
    car.moveCar();

    expect(car.forwardCount).toBeGreaterThanOrEqual(0);
    expect(car.forwardCount).toBeLessThanOrEqual(9);
  });

  test('임의의 값이 4이상일 때 전진 하는지 확인', () => {
    const cars = [
      new Car('forwardCar1'),
      new Car('forwardCar2'),
      new Car('forwardCar3'),
    ];
    const randoms = [4, 7, 9];

    mockRandoms([...randoms]);

    cars[0].moveCar();
    cars[1].moveCar();
    cars[2].moveCar();

    expect(cars[0].forwardCount).toEqual(1);
    expect(cars[1].forwardCount).toEqual(1);
    expect(cars[2].forwardCount).toEqual(1);
  });

  test('임의의 값이 3이하일 때 정지 하는지 확인', () => {
    const cars = [new Car('stopCar1'), new Car('stopCar2')];
    const randoms = [3, 0];
    mockRandoms([...randoms]);

    cars[0].moveCar();
    cars[1].moveCar();

    expect(cars[0].forwardCount).toEqual(0);
    expect(cars[1].forwardCount).toEqual(0);
  });
});
