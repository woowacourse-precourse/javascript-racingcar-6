import GameResult from '../src/model/GameResult.js';

describe('Winner', () => {
  test('단독 또는 공동 우승자 출력', () => {
    const gameResult = new GameResult();

    const carLog = new Map();
    carLog.set('a', 2);
    carLog.set('b', 1);
    carLog.set('c', 2);

    const winners = gameResult.getWinner(carLog);

    expect(winners).toEqual('a, c');
  });
});
