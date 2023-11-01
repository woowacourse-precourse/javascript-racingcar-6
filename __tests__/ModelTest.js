import Car from '../src/Model/Car.js';
import Game from '../src/Model/Game.js';

describe('Game 테스트', () => {
  let testRacingCars;

  beforeEach(() => {
    const carNames = ['pobi', 'woni', 'test'];
    testRacingCars = carNames.map((name) => new Car(name));
  });

  const expectedLab = [
    { attemptNumber: 1, totalLab: 1 },
    { attemptNumber: 2, totalLab: 2 },
    { attemptNumber: 3, totalLab: 3 },
    { attemptNumber: 8, totalLab: 8 },
    { attemptNumber: 10, totalLab: 10 },
  ];

  expectedLab.forEach(({ attemptNumber, totalLab }) => {
    test(`시도 횟수 동작 확인 테스트`, () => {
      const racingGame = new Game({
        racingCars: testRacingCars,
        attemptNumber,
      });
      const { result } = racingGame.race();

      expect(result.length).toBe(totalLab);
    });
  });
});
