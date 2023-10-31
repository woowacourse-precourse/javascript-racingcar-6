import { Console, Random } from '@woowacourse/mission-utils';
import printRaceWinner from '../src/functions/printRaceWinner';
import { updateRaceResult } from '../src/functions/printRaceResult';
import { MESSAGE } from '../src/constants/constants';

describe('함수 테스트', () => {
  test('랜덤 수가 4 이상일 경우 시 자동차 전진', () => {
    const raceCars = ['car1', 'car2', 'car3'];
    const carsResult = {
      car1: '',
      car2: '',
      car3: '',
    };

    jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(6);
    updateRaceResult(raceCars, carsResult);

    expect(carsResult.car1).toContain('-');
    expect(carsResult.car2).toContain('-');
    expect(carsResult.car3).toContain('-');
  });

  test('랜덤 수가 4 미만일 경우 시 자동차 전진 X', () => {
    const raceCars = ['car1', 'car2', 'car3'];
    const carsResult = {
      car1: '',
      car2: '',
      car3: '',
    };

    jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(3);
    updateRaceResult(raceCars, carsResult);

    expect(carsResult.car1).not.toContain('-');
    expect(carsResult.car2).not.toContain('-');
    expect(carsResult.car3).not.toContain('-');
  });

  test('우승자 출력', () => {
    const logSpy = jest.spyOn(Console, 'print');

    const raceResult = { car1: '-----', car2: '---', car3: '------' };
    printRaceWinner(raceResult);

    expect(logSpy).toHaveBeenCalledWith(`${MESSAGE.OUTPUT_WINNER} : car3`);

    logSpy.mockClear();
  });
});
