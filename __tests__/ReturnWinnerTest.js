import ReturnWinner from '../src/game/ReturnWinner';

describe('최종 우승자 반환', () => {
  describe('findWinners', () => {
    test('가장 많이 전진한 자동차 하나일 경우 반환', () => {
      const cars = [
        { getName: () => 'Car1', getPosition: () => 3 },
        { getName: () => 'Car2', getPosition: () => 6 },
        { getName: () => 'Car3', getPosition: () => 5 },
      ];

      const winners = ReturnWinner.findWinners(cars);

      expect(winners).toHaveLength(1);
      expect(winners[0].getName()).toBe('Car2');
    });

    test('가장 많이 전진한 자동차 여럿일 경우 반환', () => {
      const cars = [
        { getName: () => 'Car1', getPosition: () => 3 },
        { getName: () => 'Car2', getPosition: () => 5 },
        { getName: () => 'Car3', getPosition: () => 5 },
      ];

      const winners = ReturnWinner.findWinners(cars);

      expect(winners).toHaveLength(2);
      expect(winners[0].getName()).toBe('Car2');
      expect(winners[1].getName()).toBe('Car3');
    });

    test('cars배열이 비었을 경우', () => {
      const cars = [];
      const winners = ReturnWinner.findWinners(cars);

      expect(winners).toHaveLength(0);
    });
  });

  describe('최종 우승자 출력', () => {
    test('우승자들 이름 출력', () => {
      const winners = [{ getName: () => 'Car1' }, { getName: () => 'Car2' }];
      const expectedOutput = '최종 우승자 : Car1, Car2';
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      ReturnWinner.printWinners(winners);

      expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);

      consoleSpy.mockRestore();
    });
  });
});
