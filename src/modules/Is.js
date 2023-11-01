import { Random } from '@woowacourse/mission-utils';

class Is {
  /**
   *  Returns true if the return value of pickNumberInRange(0, 9) in the MissionUtils.Random module imported from '@woowacourse/mission-utils' is 4 or greater, false otherwise.
   *
   * Expected probability of true is 60%, expected probability of false is 40%
   *  @returns {Boolean}
   */
  static running() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  /**
   * Receives a string as an argument and determines whether the string can be a positive integer.
   * @param {String} string
   * @returns {Boolean}
   */
  static positiveIntergerString(string) {
    const numberFromString = Number(string);
    if (isNaN(numberFromString)) return false;
    if (numberFromString <= 0) return false;
    if (!Number.isInteger(numberFromString)) return false;
    return true;
  }
}

export default Is;
