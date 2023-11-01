import { Console } from "@woowacourse/mission-utils"; 
import { GUIDE_MESSAGE } from "../constants/messages";
import { RACING } from "../constants/carRacing";

class OutputView {
  constructor() {}

  // 게임 실행 결과를 출력하기 전 안내 문구 출력
  static printNoticeOfExecutionResult() {
    Console.print(GUIDE_MESSAGE.NOTICE_OF_EXECUTION_RESULT);
  }

  // 게임 실행 결과를 출력
  static printExecutionResult(carListArr) {
    let result = "";

    carListArr.forEach((car) => {
      result += `${car.name} : ${RACING.ONE_STEP_FORWARD_PROGRESS.repeat(
        car.numberOfMovesForward,
      )}\n`;
    });

    Console.print(result);
  }

  // 게임 최종 결과를 출력
  static printFinalWinner(carListArr) {
    let winnerNameArr = carListArr.map((car) => car.name);
    let finalResult = `${
      GUIDE_MESSAGE.OUTPUT_FINAL_WINNER
    } ${winnerNameArr.join(", ")}`;

    Console.print(finalResult);
  }
}

export default OutputView;
