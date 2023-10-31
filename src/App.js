import { MissionUtils } from "@woowacourse/mission-utils";
import * as func from "./Func.js";
import * as valid from "./Validation.js";

class App {
  async play() {
    let NAME_CAR = await func.getCarName();
    NAME_CAR = NAME_CAR.split(",");
    valid.validityCheckCarName(NAME_CAR);
    let SCORE_CAR = new Array(NAME_CAR.length).fill(0);

    let ITERATION_RACE = await func.getIteration();
    valid.validityCheckIteration(ITERATION_RACE);

    MissionUtils.Console.print("\n실행 결과");
    for (let ROUND = 0; ROUND < ITERATION_RACE; ROUND++) {
      func.startOneIteration(SCORE_CAR);
      func.printCurrentIteration(SCORE_CAR, NAME_CAR);
    }

    let NAME_WINNER = [];
    NAME_WINNER = func.whoIsWinner(SCORE_CAR, NAME_CAR);
    MissionUtils.Console.print(`최종 우승자 : ${NAME_WINNER}`);
  }
}

export default App;