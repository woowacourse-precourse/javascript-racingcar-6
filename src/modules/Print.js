import { Console } from '@woowacourse/mission-utils';
import Get from './Get.js';
const RESULT_FIRST_MESSAGE = '\n실행 결과';
const WINNER_FROM_FIRST_MESSAGE = '최종 우승자 : ';
const BLANK = '';

class Print {
  static racingResultFrom(racingInfo) {
    Console.print(RESULT_FIRST_MESSAGE);
    for (let gameCount = 0; gameCount < racingInfo.numberOfGame; gameCount++) {
      Print.racingPerGame(racingInfo, gameCount);
      Console.print(BLANK);
    }
  }
  static racingPerGame(racingInfo, gameCount) {
    racingInfo.carList.forEach((name, index) => {
      Console.print(
        `${name} : ${'-'.repeat(
          Get.positionWhen(racingInfo.runListArray[index], gameCount)
        )}`
      );
    });
  }

  static winnerFrom(winnerNameList) {
    Console.print(`${WINNER_FROM_FIRST_MESSAGE}${winnerNameList.join(', ')}`);
  }
}

export default Print;
