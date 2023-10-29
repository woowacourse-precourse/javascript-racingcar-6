import GameResult from '../src/model/GameResult.js';

describe('Winner', () => {
  test('단독 또는 공동 우승자 출력', () => {
    const gameResult = new GameResult();

    const soloCase = new Map();
    soloCase.set('a', 2);
    soloCase.set('b', 1);

    const shareCase = new Map();
    shareCase.set('a', 2);
    shareCase.set('b', 1);
    shareCase.set('c', 2);

    const winner = gameResult.getWinner(soloCase);
    const winners = gameResult.getWinner(shareCase);

    expect(winner).toEqual('a');
    expect(winners).toEqual('a, c');
  });
});
