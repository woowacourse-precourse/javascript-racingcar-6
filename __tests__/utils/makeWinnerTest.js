import makeWinner from '../../src/utils/makeWinner';

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
    expect(makeWinner(cars)).toEqual(expect.stringContaining('pobi'));
  });

  test('중복 우승자 생성', () => {
    const cars = [
      {
        name: 'pobi',
        moveCounts: 2,
      },
      {
        name: 'ukgi',
        moveCounts: 2,
      },
    ];
    const expectedWinner = ['pobi', 'ukgi'];
    expectedWinner.forEach((winner) => {
      expect(makeWinner(cars)).toEqual(expect.stringContaining(winner));
    });
  });
});
