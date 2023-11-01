import RacingCar from '../src/RacingCar';
import {MissionUtils} from '@woowacourse/mission-utils';
import OutputView from '../src/Views/OutputView';
import CONSTANTS from '../utils/Constants';

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

const carNamesArray = ['car1', 'car2'];
const racingCar = new RacingCar(carNamesArray);

describe('RacingCar클래스 테스트', () => {
  test('Car 인스턴스 생성 테스트', () => {
    expect(racingCar.cars.length).toEqual(carNamesArray.length);
  });
  test('각 Car 인스턴스의 이동 이력 출력 테스트', () => {
    const randoms = [
      CONSTANTS.progressValue,
      CONSTANTS.progressValue,
      CONSTANTS.progressValue,
      CONSTANTS.progressValue - 1,
    ];
    const expectedResult = ['car1 : -', 'car2 : -', 'car1 : --', 'car2 : -'];
    const trialCount = 2;
    const logSpy = getLogSpy();

    mockRandoms([...randoms]);

    for (let i = 1; i <= trialCount; i += 1) {
      racingCar.tryProgress();
      OutputView.printProgressStatus(racingCar);
    }

    expectedResult.forEach((result) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
    });
  });

  test('우승한 자동차를 출력하는 기능 테스트', () => {
    const expectedWinner = '최종 우승자 : car1';
    const logSpy = getLogSpy();

    OutputView.printWinner(racingCar);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedWinner));
  });
});
