import Refree from '../../src/Refree';
import { RANDOM_NUMBER_RANGE } from '../../src/constants/numberRange';

describe('class Refree 테스트', () => {
  let refree;
  const TRY_ROUND = 3;
  const OVER_TRY_ROUND = 1;
  const LESS_TRY_ROUND = -1;
  const MOVE_FOWARD = 4;
  const STOP = 3;
  const INVALID_RANDOM_NUMBER_MAX = RANDOM_NUMBER_RANGE.MAX + 1;
  const INVALID_RANDOM_NUMBER_MIN = RANDOM_NUMBER_RANGE.MIN - 1;

  beforeEach(() => {
    refree = new Refree(TRY_ROUND);
  });

  describe('메서드 test : clearRound()', () => {
    test('입력된 시도 횟수보다 round를 더 진행했을때 throw Error', () => {
      const excuteOverTryRound = () => {
        Array.from({ length: TRY_ROUND + OVER_TRY_ROUND }, () => {
          refree.clearRound();
        });
      };

      expect(excuteOverTryRound).toThrow();
    });
  });

  describe('메서드 test : isGameFinish()', () => {
    test('입력한 횟수만큼 round 진행했을때 isGameFinish의 반환값이 true 확인', () => {
      const excuteTryRound = Array.from({ length: TRY_ROUND }, () => {
        refree.clearRound();
      });
      const result = refree.isGameFinish();

      expect(result).toBe(true);
    });
    test('입력한 횟수보다 적게 round 진행했을떄 isGameFinish의 반환값이 false 확인', () => {
      const excuteLessThanTryRound = Array.from(
        { length: TRY_ROUND + LESS_TRY_ROUND },
        () => {
          refree.clearRound();
        }
      );
      const result = refree.isGameFinish();

      expect(result).toBe(false);
    });
  });

  describe('메서드 test : isMovable()', () => {
    test('전진 가능한 숫자가 들어왔을때 true 반환', () => {
      const result = refree.isMovable(MOVE_FOWARD);

      expect(result).toBe(true);
    });
    test('전진 불가능한 숫자가 들어왔을때 true 반환', () => {
      const result = refree.isMovable(STOP);

      expect(result).toBe(false);
    });
    test.each([INVALID_RANDOM_NUMBER_MAX, INVALID_RANDOM_NUMBER_MIN])(
      '범위 외의 숫자 $number가 들어왔을때 isMovable()은 에러를 던져야함',
      (number) => {
        expect(() => {
          refree.isMovable(number);
        }).toThrow();
      }
    );
  });
});
