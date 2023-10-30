import { MissionUtils } from '@woowacourse/mission-utils';
import {
  printInputCarNames,
  printCarsForwardDistance,
  printWinners,
} from '../src/utils/print';
import Car from '../src/Car';

const mockRandom = (number) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  MissionUtils.Random.pickNumberInRange.mockReturnValue(number);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('출력 테스트', () => {
  test('애플리케이션 시작 문구 출력', () => {
    const logSpy = getLogSpy();
    const output = `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`;

    printInputCarNames();

    expect(logSpy).toHaveBeenCalledWith(output);
  });

  test('레이스 결과 출력', () => {
    const car1 = new Car('firstCar');
    const car2 = new Car('secondCar');
    const car3 = new Car('thirdCar');

    const MOVE_FORWARD = 5;

    mockRandom(MOVE_FORWARD);
    car1.runRandomAction();
    car1.runRandomAction();

    car2.runRandomAction();

    car3.runRandomAction();
    car3.runRandomAction();
    car3.runRandomAction();

    const outputs = ['firstCar : --', 'secondCar : -', 'thirdCar : ---'];
    const logSpy = getLogSpy();

    printCarsForwardDistance([car1, car2, car3]);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(output);
    });
  });

  test('최종 우승자 안내 문구', () => {
    const inputs = [['pobi'], ['pobi', 'jun']];
    const outputs = ['최종 우승자 : pobi', '최종 우승자 : pobi, jun'];
    const logSpy = getLogSpy();

    outputs.forEach((output, index) => {
      printWinners(inputs[index]);
      expect(logSpy).toHaveBeenCalledWith(output);
    });
  });
});
