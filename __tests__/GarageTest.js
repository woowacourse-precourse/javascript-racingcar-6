import { MissionUtils } from '@woowacourse/mission-utils';
import Garage from '../src/Garage';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('클래스 Garage test', () => {
  test('Garage runCars() test', () => {
    const carNamesArray = ['pobi', 'jun', 'zed'];
    const randomNumbers = [
      [6, 5, 3],
      [5, 5, 4],
      [3, 9, 3],
    ];
    const logSpy = getLogSpy();
    const outputs = [
      ['pobi : -', 'jun : -', 'zed : '],
      ['pobi : --', 'jun : --', 'zed : -'],
      ['pobi : --', 'jun : ---', 'zed : -'],
    ];
    const garage = new Garage(carNamesArray);

    randomNumbers.forEach((randomNumber, index) => {
      mockRandoms([...randomNumber]);
      garage.runCars().printCarsAfterRun();

      outputs[index].forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(output);
      });
    });
  });

  test('Garage printCarRaceResult() test', () => {
    const carNamesArray = ['pobi', 'jun', 'zed'];
    const randomNumbers = [
      [6, 5, 3],
      [5, 5, 4],
      [3, 9, 3],
      [5, 5, 4],
    ];
    const logSpy = getLogSpy();
    const output = '최종 우승자 : jun';
    const garage = new Garage(carNamesArray);

    randomNumbers.forEach((randomNumber) => {
      mockRandoms([...randomNumber]);
      garage.runCars();
    });

    garage.printCarRaceWinners();
    expect(logSpy).toHaveBeenCalledWith(output);
  });
});
