import Car from '../src/Car';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Car 테스트', () => {
  test('randomGoAndStop 테스트', () => {
    const car = new Car('pobi');

    // when
    for (let i = 1; i <= 100; i++) {
      car.randomGoAndStop();
    }
    const result = car.score;

    // then
    expect(result).toContain('-');
  });

  test('getCurrentScore 테스트', () => {
    const car = new Car('pobi');
    const output = 'pobi : ';
    const logSpy = getLogSpy();

    // when
    car.getCurrentScore();

    // then
    expect(logSpy).toBeCalledWith(output);
  });
});
