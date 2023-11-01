import Winner from '../cargame/Winner';

describe('Winner', () => {
  describe('calculateWinners', () => {
    test('우승자가 여러명일 경우', () => {
      const winner = new Winner();
      const lastRaceResults = 'pobi : --\nwoni : -\njun : --';
      const result = winner.calculateWinners(lastRaceResults);

      expect(result).toEqual(['pobi', 'jun']);
    });

    test('우승자가 한명일 경우', () => {
      const winner = new Winner();
      const lastRaceResults = 'pobi : -\nwoni : -\njun : --';
      const result = winner.calculateWinners(lastRaceResults);

      expect(result).toEqual(['jun']);
    });

    test('최종 레이스 결과가 빈값으로 똑같을 경우', () => {
      const winner = new Winner();
      const lastRaceResults = 'pobi : \nwoni : \njun : ';
      const result = winner.calculateWinners(lastRaceResults);

      expect(result).toEqual(['pobi', 'woni', 'jun']);
    });
  });
});
