import { MissionUtils } from "@woowacourse/mission-utils";
import { CARS, INPUT_MESSAGE, OUTPUT_MESSAGE } from "../Constants.js";
import Validation from "../validation/Validation.js";

class GameUi {
  constructor() {}

  // 사용자가 차이름을 입력
  async askCarName() {
    const CAR_NAMES_INPUT = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.INPUT_CAR_NAMES
    );
    Validation.validateCarNameInput(CAR_NAMES_INPUT);
    return CAR_NAMES_INPUT;
  }

  // 사용자가 시도할 횟수를 입력
  async askAttemptCount() {
    const ATTEMPT_COUNT_INPUT = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.INPUT_ATTEMPT_COUNT
    );
    Validation.validateAttemptCountInput(ATTEMPT_COUNT_INPUT);
    return ATTEMPT_COUNT_INPUT;
  }

  // 레이스 게임 실행 결과 출력 안내 메시지 출력
  printResultMessage() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.RESULT_GUIDE_MESSAGE);
  }

  // 각 레이스 게임당 자동차들의 전진현황 출력
  printeachRaceGame() {
    for (let carIndex in CARS) {
      const CAR_NAME = `${CARS[carIndex].carName}`;
      const CAR_FORWARD_NUMBER = Number(CARS[carIndex].forwardNumber);

      MissionUtils.Console.print(
        OUTPUT_MESSAGE.EACHRACE(CAR_NAME, CAR_FORWARD_NUMBER)
      );
    }
    MissionUtils.Console.print("");
  }

  // 최종 우승자 출력
  printWinner(winnerCarNames) {
    MissionUtils.Console.print(OUTPUT_MESSAGE.WINNER(winnerCarNames));
  }
}
export default GameUi;
