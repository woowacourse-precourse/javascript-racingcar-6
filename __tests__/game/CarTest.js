import Car from '../../src/game/Car';
import { Console } from '@woowacourse/mission-utils';
import { pickNumberInRange } from '../../src/utility/random';

jest.mock('../../src/utility/random', () => ({
  pickNumberInRange: jest.fn(),
}));

describe('Car 클래스 테스트', () => {
  test('tryToMove 이동 테스트', () => {
    const car = new Car('Car1');
    const logSpy = jest.spyOn(Console, 'print');
    pickNumberInRange.mockReturnValue(5);

    car.tryToMove();
    car.printStepState(); //
    expect(logSpy).toHaveBeenCalledWith('Car1 : -');
  });

  test('tryToMove 정지 테스트', () => {
    const car = new Car('Car1');
    const logSpy = jest.spyOn(Console, 'print');
    pickNumberInRange.mockReturnValue(3);
    car.tryToMove();
    car.printStepState();

    expect(logSpy).toHaveBeenCalledWith('Car1 : ');
  });

  test('printStepState 테스트', () => {
    jest.mock('../../src/utility/string', () => ({
      getHyphens: jest.fn().mockReturnValue('---'),
    }));

    const car = new Car('Car1');
    const logSpy = jest.spyOn(Console, 'print');

    pickNumberInRange.mockReturnValue(5);
    for (let i = 0; i < 3; i++) car.tryToMove();
    car.printStepState();

    expect(logSpy).toHaveBeenCalledWith('Car1 : ---');
  });

  test('compareAndUpdateMaxStepCount 테스트', () => {
    const car = new Car('Car1');
    const maxStepCount = 0;
    pickNumberInRange.mockReturnValue(5);

    car.tryToMove();
    const newMaxStepCount = car.compareAndUpdateMaxStepCount(maxStepCount);

    expect(newMaxStepCount).toBe(1);
  });

  test('isStepCountEqualToMax 테스트', () => {
    const car1 = new Car('Car1');
    const car2 = new Car('Car2');

    const maxStepCount = 1;
    pickNumberInRange.mockReturnValue(5);
    car2.tryToMove();

    const car1Name = car1.isStepCountEqualToMax(maxStepCount);
    const car2Name = car2.isStepCountEqualToMax(maxStepCount);

    expect(car1Name).toBe(undefined);
    expect(car2Name).toBe('Car2');
  });
});