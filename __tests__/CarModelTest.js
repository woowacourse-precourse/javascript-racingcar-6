import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/models/Car';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Car Model Test', () => {
  test('이름을 설정하고 반환 테스트', () => {
    const car = new Car('우테코');
    expect(car.getName()).toEqual('우테코');
  });

  test('move매서드 실행 시 4이상일 때만 거리가 증가하는지', () => {
    mockRandoms([3, 5, 9, 1]);
    const car = new Car('우테코');
    car.move();
    expect(car.getDistance()).toEqual(0);
    car.move();
    expect(car.getDistance()).toEqual(1);
    car.move();
    expect(car.getDistance()).toEqual(2);
    car.move();
    expect(car.getDistance()).toEqual(2);
  });
});
