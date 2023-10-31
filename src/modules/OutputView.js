import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constant.js";

class OutputView {
  gameProcessing(memberList) {
    Object.keys(memberList).forEach((member) => {
      Console.print(
        `${member} : ${GAME_MESSAGE.DASH.repeat(memberList[member])}`
      );
    });
    Console.print("");
  }

  gameEndPrint(winner) {
    Console.print(`${GAME_MESSAGE.WINNER}${winner.join(", ")}`);
  }
}

export default OutputView;
