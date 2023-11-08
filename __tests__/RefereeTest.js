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
  let referee;
  beforeEach(() => {
    referee = new Referee();
  });
  test('전진 비교', () => {
    const carArray = [
      makeCar('car1', 3),
      makeCar('car2', 0),
      makeCar('winner', 4),
    ];
    const comparedMovement = referee.compareMovement(carArray);
    expect(comparedMovement.map((v) => v.name).join(',')).toBe(
      'winner,car1,car2'
    );
  });

  test('우승 점수 판단', () => {
    const WINNER_POINT = 4;
    const comparedMovement = [
      makeCar('winner', WINNER_POINT),
      makeCar('car1', WINNER_POINT - 1),
      makeCar('car2', WINNER_POINT - 2),
    ];

    expect(referee.getWinnerPoint(comparedMovement)).toEqual(WINNER_POINT);
  });

  test('우승자 판단', () => {
    const WINNER_POINT = 4;
    const carArray = [
      makeCar('car1', WINNER_POINT - 1),
      makeCar('car2', WINNER_POINT - 2),
      makeCar('winner', WINNER_POINT),
    ];

    const winners = referee.selectWinner(carArray, WINNER_POINT);
    expect(winners.join(',')).toBe('winner');
  });

  test('점수 비교: 단일 우승자', () => {
    const carArray = [
      makeCar('car1', 3),
      makeCar('car2', 0),
      makeCar('winner', 4),
    ];
    const message = `${MESSAGE.winner}winner`;

    const logSpy = getLogSpy();

    referee.decideGameResult(carArray);
    referee.showWinner();

    expect(referee.winnerArray.join(', ')).toBe('winner');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });

  test('점수 비교: 공동 우승자', () => {
    const carArray = [
      makeCar('car1', 3),
      makeCar('winner1', 4),
      makeCar('winner2', 4),
    ];
    const WINNERS = 'winner1, winner2';
    const GAME_RESULT = `${MESSAGE.winner}${WINNERS}`;

    const logSpy = getLogSpy();

    const referee = new Referee();

    referee.decideGameResult(carArray);
    referee.showWinner();

    expect(referee.winnerArray.join(', ')).toBe(WINNERS);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(GAME_RESULT));
  });
});
