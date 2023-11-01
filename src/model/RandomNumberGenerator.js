import { Random } from '@woowacourse/mission-utils';
import { GRANDPRIX_MOVE_OPTION } from '../constants/GrandPrixOption.js';

export default class RandomNumberGenerator {
  /**
   * @static
   * @param {number} amount
   * @returns {number[]} (0 ~ 9)까지 랜덤으로 생성된 숫자들을 반환
   */
  static generate(amount) {
    return Array.from({ length: amount }, () =>
      Random.pickNumberInRange(GRANDPRIX_MOVE_OPTION.min, GRANDPRIX_MOVE_OPTION.max),
    );
  }
}
