import { Random } from '@woowacourse/mission-utils';

class Is {
  static running() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  static positiveIntergerString(string) {
    const numberFromString = Number(string);
    if (isNaN(numberFromString)) return false;
    if (numberFromString <= 0) return false;
    if (!Number.isInteger(numberFromString)) return false;
    return true;
  }
}

export default Is;
