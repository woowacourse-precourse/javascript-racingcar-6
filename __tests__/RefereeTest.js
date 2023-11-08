import { MissionUtils } from '@woowacourse/mission-utils';

import Referee from '../src/Referee';
import { MESSAGE } from '../src/constant';

const makeMovement = (length) =>
  Array.from({ length: length }, () => MESSAGE.movement);

const makeCar = (name, length) => ({
  name: name,
  movement: makeMovement(length),
});

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 : 심판 테스트', () => {
  test('점수 비교: 단일 우승자', () => {
    const carArray = [
      makeCar('car1', 3),
      makeCar('car2', 0),
      makeCar('winner', 4),
    ];
    const message = `${MESSAGE.winner}winner`;

    const logSpy = getLogSpy();

    const referee = new Referee();

    referee.comparePoint(carArray);
    referee.showWinner();

    expect(referee.winnerArray.join('')).toBe('winner');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });

  test('점수 비교: 공동 우승자', () => {
    const carArray = [
      makeCar('car1', 3),
      makeCar('winner1', 4),
      makeCar('winner2', 4),
    ];
    const message = `${MESSAGE.winner}winner1, winner2`;

    const logSpy = getLogSpy();

    const referee = new Referee();

    referee.comparePoint(carArray);
    referee.showWinner();

    expect(referee.winnerArray.join(',')).toBe('winner1,winner2');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });
});
