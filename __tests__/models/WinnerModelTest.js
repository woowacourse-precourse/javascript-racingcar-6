import WinnerModel from '../../src/Model/WinnerModel';

describe('MakeWinner Test', () => {
  let winnerModel;
  beforeEach(() => {
    winnerModel = new WinnerModel();
  });

  test('우승자를 만듭니다.', () => {
    const completedRaceCars = [
      {
        name: 'pobi',
        moveCounts: 2,
      },
      {
        name: 'ukgi',
        moveCounts: 1,
      },
    ];

    expect(winnerModel.makeWinner(completedRaceCars)).toEqual(
      expect.stringContaining('pobi'),
    );
  });

  test('중복 우승자를 만듭니다.', () => {
    const completedRaceCars = [
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
      expect(winnerModel.makeWinner(completedRaceCars)).toEqual(
        expect.stringContaining(winner),
      );
    });
  });
});
