import { Console } from '@woowacourse/mission-utils';
import Get from './Get.js';
const RESULT_FIRST_MESSAGE = '실행 결과';

class Print {
  static racingResultFrom(racingInfo) {
    Console.print(RESULT_FIRST_MESSAGE);
    for (let i = 0; i < racingInfo.numberOfGame; i++) {
      Print.racingPerGame(racingInfo, i);
    }
  }
  static racingPerGame(racingInfo, gameCount) {
    racingInfo.carList.forEach((name, index) => {
      Console.print(
        `${name} : ${'-'.repeat(
          Get.position(racingInfo.didItRun[index], gameCount)
        )}`
      );
    });
  }
}

export default Print;
