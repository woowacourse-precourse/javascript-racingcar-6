import makeWinner from '../utils/makeWinner';

describe('MakeWinner Test', () => {
  test('우승자 생성기능 테스트', () => {
    const cars = [
      {
        name: 'pobi',
        moveCounts: 2,
      },
      {
        name: 'ukgi',
        moveCounts: 1,
      },
    ];
    expect(makeWinner(cars)).toBe('pobi');
  });
});
