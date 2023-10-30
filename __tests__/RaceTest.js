import { MissionUtils } from '@woowacourse/mission-utils';

import Car from '../src/Car.js';
import Race from '../src/Race.js';

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

describe('자동차 경주 게임 진행 테스트', () => {
  test('입력한 게임 횟수만큼 게임을 진행', () => {
    const cars = [new Car('sso'), new Car('cow')];
    const gameCount = 5;

    const race = new Race(cars, gameCount);
    race.playRound = jest.fn();
    race.printRoundResult = jest.fn();

    race.start();

    expect(race.playRound).toBeCalledTimes(gameCount);
    expect(race.printRoundResult).toBeCalledTimes(gameCount);
  });

  test('각 자동차의 랜덤값이 4이상이면 전진, 미만이면 멈춤', () => {
    const randoms = [4, 2];
    const car1 = new Car('sso');
    const car2 = new Car('cow');

    mockRandoms([...randoms]);

    car1.move();
    car2.move();

    expect(car1.getMoveCount()).toBe(1);
    expect(car2.getMoveCount()).toBe(0);
  });

  test('게임 차수별로 각 자동차의 실행 결과 출력', () => {
    const cars = [new Car('sso'), new Car('cow')];
    const race = new Race(cars, 1);
    const logSpy = getLogSpy();
    const randoms = [2, 5];
    const outputs = ['sso : ', 'cow : -'];

    mockRandoms([...randoms]);

    race.playRound();
    race.printRoundResult();

    expect(logSpy).toBeCalledTimes(cars.length + 1);
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
