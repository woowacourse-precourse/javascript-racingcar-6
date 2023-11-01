import { console, random } from "@woowacourse/mission-utils";
import * as racingFunc from "./RarcingcarFunction";

class App {
  async play() {
    const CAR_NAME = await racingFunc.carName();
    const CAR_SCORE = new Array(CAR_NAME.length).fill(0);

    const MOVING_NUMBER = await racingFunc.movingNumber();

    Console.print("/n실행 결과");
    for (let i = 0; i < MOVING_NUMBER; i++) {
      racingFunc.startRound(CAR_SCORE);
      racingFunc.currentRound(CAR_SCORE, CAR_NAME);
    }

    const WINNER = [];
    WINNER = racingFunc.findWinner(CAR_SCORE, CAR_NAME);
    Console.print(`최종 우승자 : ${WINNER}`);
  }
}

export default App;
