import { Console } from '@woowacourse/mission-utils';
const RESULT_FIRST_MESSAGE = '\n실행 결과';
const WINNER_FROM_FIRST_MESSAGE = '최종 우승자 : ';
const BLANK = '';

class Print {
  /**
   * This function receives the racingInfo Object returned from ConvertInputTo.racingInfo() as an argument,
   * print results for each game
   * @param {Object} racingInfo
   */
  static racingResultFrom(racingInfo) {
    Console.print(RESULT_FIRST_MESSAGE);
    for (let gameCount = 0; gameCount < racingInfo.numberOfGame; gameCount++) {
      Print.positionWhenGameCount(racingInfo, gameCount);
      Console.print(BLANK);
    }
  }

  /**
   * This function receives the racingInfo Object returned from ConvertInputTo.racingInfo() and number of game as an argument,
   * print All elements of carList output their positions when the game has been played gameCount times
   * @param {Object} racingInfo
   * @param {Number} gameCount
   */
  static positionWhenGameCount(racingInfo, gameCount) {
    racingInfo.carList.forEach((name, index) => {
      Console.print(
        `${name} : ${'-'.repeat(
          racingInfo.carPositionMatrix[index][gameCount]
        )}`
      );
    });
  }

  /**
   * Receives an array containing the winner names and prints the winner list.
   * @param {Array,<String>} winnerNameList
   */
  static winnerFrom(winnerNameList) {
    Console.print(`${WINNER_FROM_FIRST_MESSAGE}${winnerNameList.join(', ')}`);
  }
}

export default Print;
