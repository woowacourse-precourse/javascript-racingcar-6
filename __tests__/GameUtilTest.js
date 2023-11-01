import { Random } from '@woowacourse/mission-utils';
import {hasMovedForward} from '../src/game.js';

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
})