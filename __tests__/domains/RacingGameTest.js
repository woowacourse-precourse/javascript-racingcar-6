import Car from '../../src/Car.js';
import RacingGame from '../../src/RacingGame.js';
import Refree from '../../src/Refree.js';
import { RANDOM_NUMBER_RANGE } from '../../src/constants/numberRange.js';

describe('class RacingGame Test', () => {
  let carInstanceList;
  let refree;
  let racingGame;
  const MOVE_FOWARD = 5;
  const STOP = 1;
  const TRY_ROUND = 3;
  const carNames = ['준모', '정배', '서부장'];

  beforeEach(() => {
    carInstanceList = carNames.map((carName) => new Car(carName));
    refree = new Refree(TRY_ROUND);
    racingGame = new RacingGame(carInstanceList, refree);
  });

  describe('메서드 test : isFinish() 테스트', () => {
    test('TRY_ROUND 만큼 round를 진행했을때 finish가 true로 반환되는지 확인', () => {
      Array.from({ length: TRY_ROUND }, () => {
        racingGame.roundStart();
      });
      const isFinish = refree.isGameFinish();

      expect(isFinish).toBe(true);
    });
    test('TRY_ROUND 만큼 round를 진행 안했을때 finish가 false로 반환되는지 확인', () => {
      Array.from({ length: TRY_ROUND - 1 }, () => {
        racingGame.roundStart();
      });
      const isFinish = refree.isGameFinish();

      expect(isFinish).toBe(false);
    });
  });

  describe('메서드 test : roundStart()', () => {
    test('입력받은 TRY_ROUND보다 더 많이 실행할경우 throw Error 테스트', () => {
      const overTryRound = TRY_ROUND + 1;
      const overTryMethodExcute = () => {
        Array.from({ length: overTryRound }, () => {
          racingGame.roundStart();
        });
      };

      expect(() => {
        overTryMethodExcute();
      }).toThrow();
    });

    test('입력받은 TRY_ROUND보다 적게 호출됐을때 Not throw Error 테스트', () => {
      const stillLleftTryRound = TRY_ROUND - 1;
      const leftTryMethodExcute = () => {
        Array.from({ length: stillLleftTryRound }, () => {
          racingGame.roundStart();
        });
      };

      expect(() => {
        leftTryMethodExcute();
      }).not.toThrow();
    });
  });
});
