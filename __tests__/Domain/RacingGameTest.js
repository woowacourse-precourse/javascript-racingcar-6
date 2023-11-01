import RacingGame from '../../src/Domain/RacingGame';
import Car from '../../src/Domain/Car';

describe('RacingGame 테스트', () => {
  let mockCars;
  let racingGame;

  beforeEach(() => {
    // global given (3명으로 통일) => 인원 수는 테스트에 영향을 미치지 않는 요소. 0명은 View에서 예외처리 됨.
    const mockCarNames = ['pobi', 'crong', 'honux'];
    mockCars = mockCarNames.map((name) => new Car(name));
  });

  const mockRoundCases = [
    { round: 1, expectedRound: 1 },
    { round: 3, expectedRound: 3 },
    { round: 5, expectedRound: 5 },
  ];

  mockRoundCases.forEach(({ round, expectedRound }) => {
    test(`주어진 횟수(${expectedRound} 라운드) 동안 게임을 진행한다.`, () => {
      racingGame = new RacingGame({ cars: mockCars, round });
      const { raceResult } = racingGame.startRace();

      expect(raceResult.length).toBe(expectedRound);
    });
  });
});
