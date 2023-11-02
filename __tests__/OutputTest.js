import Output from '../src/View/Output';
import Car from '../src/Model/Car';
import { MissionUtils } from '@woowacourse/mission-utils';

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

describe('출력 test', () => {
  test('자동차 상태 출력', () => {
    // given
    const isGo = [4];
    const outputs = ['hojkim77 : -'];
    const logSpy = getLogSpy();
    mockRandoms(isGo);

    // when
    const car = new Car('hojkim77');
    // 1 전진
    car.addDistance();
    // 자동차 상태 출력
    Output.printCarState(car.name, car.distance);

    //then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('우승자 출력', () => {
    // given
    const GO = 4;
    const STOP = 3;
    const randoms = [GO, GO, GO, STOP];
    const outputs = ['최종 우승자 : KHJ'];
    const logSpy = getLogSpy();

    // when
    const winner = new Car('KHJ');
    const loser = new Car('WHO');

    winner.addDistance();
    loser.addDistance();
    winner.addDistance();
    loser.addDistance();

    Output.printWinners([winner, loser]);

    //then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
