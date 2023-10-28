import { Random } from '@woowacourse/mission-utils';

class Util {
  /**
  * 랜덤의 boolean 값을 반환하는 함수
  * @returns {boolean}
  */
  static getRandomBoolean() {
    const randomInteger = Random.pickNumberInRange(0, 9);

    return randomInteger >= 4;
  }
}

export default Util;
