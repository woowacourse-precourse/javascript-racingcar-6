import Car from '../src/Car';
import {MissionUtils} from '@woowacourse/mission-utils';
import CONSTANTS from '../utils/Constants';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Car클래스 테스트', () => {
  test('무작위 값이 4 이상일 때 이동 테스트', () => {
    const car = new Car('test');
    const randoms = [CONSTANTS.progressValue, CONSTANTS.progressValue - 1];
    mockRandoms([...randoms]);

    randoms.forEach((_) => car.progressDependingOnValue());
    expect(car.getProgressStatus()).toEqual('test : -');
  });
});
