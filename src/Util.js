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

  /**
  * 가장 멀리간 참가자의 횟수를 반환하는 함수
  * @param {{name: string, progress: string}[]} joinList
  * @returns {boolean}
  */
  static getMaxLength(joinList) {
    return joinList.reduce((maxValue, { progress }) => (
      maxValue > progress.length ? maxValue : progress.length
    ), 0);
  }

  /**
  * 우승자 배열을 반환하는 함수
  * @param {{name: string, progress, string}[]} joinList
  * @param {number} maxLength
  * @returns {string[]}
  */
  static getWinnerList(joinList, maxLength) {
    return joinList.filter(({ progress }) => progress.length === maxLength);
  }
}

export default Util;
