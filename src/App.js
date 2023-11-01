import { MissionUtils } from "@woowacourse/mission-utils";
import * as racingFunc from "./RarcingcarFunction.js";
import * as err from "./ErrorValidation.js";

class App {
  async play() {
    let CAR_NAME = await racingFunc.carName();
    CAR_NAME = CAR_NAME.split(",");
    err.checkCarName(CAR_NAME);
    let CAR_SCORE = new Array(CAR_NAME.length).fill(0);

    let MOVING_NUMBER = await racingFunc.movingNumber();
    err.checkNumber(MOVING_NUMBER);

    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < MOVING_NUMBER; i++) {
      racingFunc.startRound(CAR_SCORE);
      racingFunc.currentRound(CAR_SCORE, CAR_NAME);
    }

    let WINNER = [];
    WINNER = racingFunc.findWinner(CAR_SCORE, CAR_NAME);
    MissionUtils.Console.print(`최종 우승자 : ${WINNER}`);
  }
}

export default App;
