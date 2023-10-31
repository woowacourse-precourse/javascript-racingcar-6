import Referee from '../src/domain/Referee.js';

describe('RefereeTest', () => {
  test('단독 우승자 찾기', () => {
    const referee = new Referee();
    referee.recordNumberOfRound(1);
    referee.recordResult('jerry', 3, 0);
    referee.recordResult('tom', 2, 0);
    expect(referee.findWinners()).toStrictEqual(['jerry']);
  });
  test('공동 우승자 찾기', () => {
    const referee = new Referee();
    referee.recordNumberOfRound(1);
    referee.recordResult('jerry', 3, 0);
    referee.recordResult('tom', 3, 0);
    referee.recordResult('cheeze', 3, 0);
    expect(referee.findWinners()).toStrictEqual(['jerry', 'tom', 'cheeze']);
  });
});
