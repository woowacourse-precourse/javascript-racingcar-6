import Car from '../../src/Car';
import RacingGame from '../../src/RacingGame';

describe('class RacingGame Test', () => {
  let carInstanceList;
  let racingGame;
  const MOVE_FOWARD = 5;
  const STOP = 1;
  const TRY_COUNT = 3;
  const carNames = ['준모', '정배', '서부장'];

  beforeEach(() => {
    carInstanceList = Array.from(
      { length: [...carNames].length },
      (carName) => new Car(carName)
    );
    racingGame = new RacingGame(carInstanceList, TRY_COUNT);
  });

  describe('메서드 test : createRandomNumber()', () => {
    test('20번 실행했을때 모든 값들이 0과 9 사이인지 확인하는 테스트', () => {
      const randomNumbers = Array.from({ length: 20 }, () =>
        racingGame.createRandomNumber()
      );
      const isValidRange = [...randomNumbers].every(
        (num) => num >= 0 && num <= 9
      );

      expect(isValidRange).toBe(true);
    });
  });

  describe('메서드 test : isFinish() 테스트', () => {
    test('TRY_COUNT 만큼 round를 진행했을때 finish가 true로 반환되는지 확인', () => {
      Array.from({ length: TRY_COUNT }, () => {
        racingGame.roundStart();
      });
      const isFinish = racingGame.isFinish();

      expect(isFinish).toBe(true);
    });
    test('TRY_COUNT 만큼 round를 진행 안했을때 finish가 false로 반환되는지 확인', () => {
      Array.from({ length: TRY_COUNT - 1 }, () => {
        racingGame.roundStart();
      });
      const isFinish = racingGame.isFinish();

      expect(isFinish).toBe(false);
    });
  });
});
