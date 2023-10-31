import { printMessage } from "../utils/console/printMessage.js";
import { GUIDE_MESSAGE } from "../constants/messages.js";
import { RACING } from "../constants/carRacing.js";

export default class OutputView {
  constructor() {}

  // 게임 실행 결과를 출력하기 전 안내 문구 출력
  static printNoticeOfExecutionResult() {
    printMessage(GUIDE_MESSAGE.NOTICE_OF_EXECUTION_RESULT);
  }

  // 게임 실행 결과를 출력
  static printExecutionResult(carListArr) {
    let result = "";

    carListArr.forEach((car) => {
      result += `${car.name} : ${RACING.ONE_STEP_FORWARD_PROGRESS.repeat(
        car.numberOfMovesForward,
      )}\n`;
    });

    printMessage(result);
  }

  // 게임 최종 결과를 출력
  static printFinalWinner(carListArr) {
    let winnerNameArr = carListArr.map((car) => car.name);
    let finalResult = `${
      GUIDE_MESSAGE.OUTPUT_FINAL_WINNER
    } ${winnerNameArr.join(", ")}`;

    printMessage(finalResult);
  }
}
