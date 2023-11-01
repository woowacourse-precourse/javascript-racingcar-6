import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/Car';

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('자동차 전진 테스트', () => {
  let car;

  beforeEach(() => {
    car = new Car();
  });

  test('랜덤 수에 따라 전진 출력', () => {
    const logSpy = jest.spyOn(console, 'log');
    const allForwardResult = ['', ''];
    const cars = ['car1', 'car2'];

    mockRandoms([2, 5]);

    car.printForwardResult(allForwardResult, 0, cars);

    expect(logSpy).toHaveBeenCalledWith('car1 : ');

    car.printForwardResult(allForwardResult, 1, cars);

    expect(logSpy).toHaveBeenCalledWith('car2 : -');
  });
});
