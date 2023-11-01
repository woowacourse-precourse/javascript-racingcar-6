import { MissionUtils } from "@woowacourse/mission-utils";

import Input from "./Input.js";
import Racing from "./Racing.js";
import Winner from "./Winner.js";

class RacingGame {
  async gameStart() {
    const input = new Input();  // 초기 입력 클래스
    const racing = new Racing();  // 레이싱 진행 클래스
    const winner = new Winner(); // 우승자 출력 클래스

    const scoreStorage = await racing.racingStart(
      await input.getCarName(),
      await input.getRacingNumber()
    )

    winner.winnerPrint(scoreStorage);

  }
}

export default RacingGame;