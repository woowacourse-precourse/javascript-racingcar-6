import CarRace from '../src/models/RaceProcess.js';

describe('Winner', () => {
  test('단독 또는 공동 우승자 출력', () => {
    const race = new CarRace();

    const soloCase = new Map();
    soloCase.set('a', 2);
    soloCase.set('b', 1);

    const shareCase = new Map();
    shareCase.set('a', 2);
    shareCase.set('b', 1);
    shareCase.set('c', 2);

    const winner = race.getWinner(soloCase);
    const winners = race.getWinner(shareCase);

    expect(winner).toEqual('a');
    expect(winners).toEqual('a, c');
  });
});
