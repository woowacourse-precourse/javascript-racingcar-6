import { Console } from '@woowacourse/mission-utils';

class Output {
  /**
   *
   * @param {string} carName
   * @param {num} carDistance
   */
  static printCarState(carName, carDistance) {
    Console.print(carName + ' : ' + '-'.repeat(carDistance));
  }
}

export default Output;
