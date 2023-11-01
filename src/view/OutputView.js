import { MissionUtils } from '@woowacourse/mission-utils';
import { CARS, OUTPUT_MESSAGE } from '../Constants.js';

class OutputView {
    constructor() {}

  printInitMessage() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.initMessageWelcome);
    MissionUtils.Console.print(OUTPUT_MESSAGE.initMessageGuide);
  }
  
  // 레이스 게임 실행 결과 출력 안내 메시지 출력
  printResultMessage() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.resultGuideMessage);
  }

  // 각 레이스 게임당 자동차들의 전진현황 출력
  printeachRaceGame() {
    for (let carIndex in CARS) {
      const CAR_NAME = `${CARS[carIndex].carName}`;
      const CAR_FORWARD_NUMBER = Number(CARS[carIndex].forwardNumber);

      MissionUtils.Console.print(
        OUTPUT_MESSAGE.eachRace(CAR_NAME, CAR_FORWARD_NUMBER)
      );
    }
    MissionUtils.Console.print('');
  }

  // 최종 우승자 출력
  printWinner(winnerCarNames) {
    MissionUtils.Console.print(OUTPUT_MESSAGE.winner(winnerCarNames));
  }
}
export default OutputView;