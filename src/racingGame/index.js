import { MissionUtils } from "@woowacourse/mission-utils";

import Input from "./Input.js";
import Racing from "./Racing.js";
// import Result from "./Result.js";

class RacingGame {
  async gameStart() {
    const input = new Input();  // 초기 입력 클래스
    const racing = new Racing();  // 레이싱 진행 클래스
    // const result = new Result(); // 결과 출력 클래스
    const racingResult = racing.racingStart(
      await input.getCarName(),
      await input.getRacingNumber()
    )
  }
}

export default RacingGame;