import { Random } from '@woowacourse/mission-utils';
import {getMovingResult, hasMovedForward} from '../src/game.js';

describe('게임 유틸', () => {
  describe('hasMovedForward', () => {
    test('Random.pickNumberInRange 유틸이 4미만의 값을 반환한다면, false를 반환해야 한다', () => {
      jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(3);
      expect(hasMovedForward()).toBe(false);
    })

    test('Random.pickNumberInRange 유틸이 4이상의 값을 반환한다면, true를 반환해야 한다', () => {
      jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(5);
      expect(hasMovedForward()).toBe(true);
    })
  })

  describe('getMovingResult', () => {
    test('자연수를 입력하지 않으면, 에러를 반환해야 한다.', () => {
      expect(() => getMovingResult(-1)).toThrowError();
    })
    test('반환값은 모두 boolean 이어야 한다.', () => {
      const movingResult = getMovingResult(3);
      movingResult.forEach((result) => {
        expect(result).toEqual(expect.any(Boolean));
      })
    })
    test('입력한 자연수만큼의 길이를 갖는 배열을 반환해야한다.', () => {
      const count = 5;
      const movingResult = getMovingResult(count);
      expect(movingResult.length).toBe(count);
    })
  })
})