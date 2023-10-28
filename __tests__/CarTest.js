import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/Car';

const mockRandom = (number) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  MissionUtils.Random.pickNumberInRange.mockReturnValue(number);
};

describe('Car 클래스 테스트', () => {
  test('자동차 이름 반환', () => {
    const car = new Car('myCar');
    const result = car.getCarName();
    expect(result).toEqual('myCar');
  });

  test('자동차 전진', () => {
    const car = new Car('myCar');
    const input = 5;
    const ouput = 1;
    mockRandom(input);
    car.runRandomAction();

    expect(car.getForwardDistance()).toEqual(ouput);
  });

  test('자동차 정지', () => {
    const car = new Car('myCar');
    const input = 3;
    const ouput = 0;
    mockRandom(input);
    car.runRandomAction();

    expect(car.getForwardDistance()).toEqual(ouput);
  });
});
