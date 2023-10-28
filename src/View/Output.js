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

  /**
   *
   * @param {[string]} winners
   */
  static printWinners(winners) {
    const winnersString = winners.join(', ');

    Console.print('최종 우승자 : ' + winnersString);
  }
}

export default Output;
