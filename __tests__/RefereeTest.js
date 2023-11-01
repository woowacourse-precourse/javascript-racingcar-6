import Referee from '../src/Referee';

describe('Referee 클래스 테스트', () => {
  let winner;

  beforeEach(() => {
    winner = new Referee();
  });

  describe('우승자가 잘 리턴되는지 테스트', () => {
    test('우승자가 한 명일 때', () => {
      const inputs = [
        { carName: 'red', departureCount: '---' },
        { carName: 'blue', departureCount: '-' },
        { carName: 'pink', departureCount: '' },
      ];

      expect(winner.compareWinner(inputs)).toBe('red');
    });

    test('우승자가 한 명 이상 일 때', () => {
      const inputs = [
        { carName: 'red', departureCount: '--' },
        { carName: 'blue', departureCount: '-' },
        { carName: 'pink', departureCount: '--' },
      ];

      expect(winner.compareWinner(inputs)).toBe('red, pink');
    });
  });
});
