import { MissionUtils } from '@woowacourse/mission-utils';

import Car from '../src/Car.js';
import Race from '../src/Race.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
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
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');

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

describe('최종 우승자 출력 테스트', () => {
  test('최종 우승자가 한 명', () => {
    const cars = [new Car('c1'), new Car('c2'), new Car('c3')];
    const gameCount = 3;
    const randoms = [2, 4, 5, 7, 8, 1, 6, 9, 4];

    mockRandoms([...randoms]);

    const race = new Race(cars, gameCount);
    race.start();

    expect(race.getWinners()).toBe('c2');
  });

  test('최종 우승자가 여러 명인 경우 쉼표로 구분해서 출력', () => {
    const cars = [new Car('c1'), new Car('c2'), new Car('c3'), new Car('c4')];
    const gameCount = 3;
    const randoms = [5, 6, 3, 2, 4, 2, 8, 1, 3, 9, 4, 5];

    mockRandoms([...randoms]);

    const race = new Race(cars, gameCount);
    race.start();

    expect(race.getWinners()).toBe('c1, c2, c3');
  });
});
