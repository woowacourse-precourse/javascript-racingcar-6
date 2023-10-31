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

  describe('Referee 클래스 전체 테스트', () => {
    const referee = new Referee();

    test('기록이 제대로 되는지 확인', () => {
      referee.recordNumberOfRound(5);
      referee.recordResult('pobi', 1, 0);
      referee.recordResult('woni', 0, 0);
      referee.recordResult('jun', 1, 0);
      referee.recordResult('pobi', 2, 1);
      referee.recordResult('woni', 1, 1);
      referee.recordResult('jun', 2, 1);
      referee.recordResult('pobi', 3, 2);
      referee.recordResult('woni', 2, 2);
      referee.recordResult('jun', 3, 2);
      referee.recordResult('pobi', 4, 3);
      referee.recordResult('woni', 3, 3);
      referee.recordResult('jun', 4, 3);
      referee.recordResult('pobi', 5, 4);
      referee.recordResult('woni', 4, 4);
      referee.recordResult('jun', 5, 4);

      const answer = [
        new Map([
          ['pobi', 1],
          ['woni', 0],
          ['jun', 1],
        ]),
        new Map([
          ['pobi', 2],
          ['woni', 1],
          ['jun', 2],
        ]),
        new Map([
          ['pobi', 3],
          ['woni', 2],
          ['jun', 3],
        ]),
        new Map([
          ['pobi', 4],
          ['woni', 3],
          ['jun', 4],
        ]),
        new Map([
          ['pobi', 5],
          ['woni', 4],
          ['jun', 5],
        ]),
      ];
      expect(referee.results).toStrictEqual(answer);
    });

    test('우승자 찾기', () => {
      expect(referee.findWinners()).toStrictEqual(['pobi', 'jun']);
    });
  });
});
