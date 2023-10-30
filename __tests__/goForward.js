const { MissionUtils } = require('@woowacourse/mission-utils');
const Car = require('../src/Car');

describe('정지 or 전진 함수 goForWard ', () => {
  const MOVING_FORWARD = 4;
  const STOP = 3;
  test('0 ~ 3 일때 정지 ', () => {
    const testCar = new Car('testCar');
    const mockRandoms = (number) => {
      MissionUtils.Random.pickNumberInRange = jest.fn(() => number);
    };
    mockRandoms(STOP);
    testCar.goForward();
    expect(testCar.distance).toBe('');
  });
  test(' 4 ~ 9 일때 전진', () => {
    const testCar = new Car('testCar');
    const mockRandoms = (number) => {
      MissionUtils.Random.pickNumberInRange = jest.fn(() => number);
    };
    mockRandoms(MOVING_FORWARD);
    testCar.goForward();
    expect(testCar.distance).toBe('-');
  });
});
