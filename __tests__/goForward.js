const { MissionUtils } = require('@woowacourse/mission-utils');
const Car = require('../src/Car');

describe('정지 or 전진 함수 goForWard ', () => {
  test('0 ~ 3 일때 정지 ', () => {
    const testCar = new Car();
    const mockRandoms = (number) => {
      MissionUtils.Random.pickNumberInRange = jest.fn(() => number);
    };
    mockRandoms(3);
    testCar.goForward();
    expect(testCar.distance).toBe('');
  });
  test(' 4 ~ 9 일때 전진', () => {
    const testCar = new Car();
    const mockRandoms = (number) => {
      MissionUtils.Random.pickNumberInRange = jest.fn(() => number);
    };
    mockRandoms(4);
    testCar.goForward();
    expect(testCar.distance).toBe('-');
  });
});
