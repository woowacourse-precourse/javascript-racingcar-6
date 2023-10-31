import { printMessage } from "../utils/console/printMessage";
import { GUIDE_MESSAGE } from "../constants/messages";
import { RACING } from "../constants/carRacing";

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
}
