import { MissionUtils } from "@woowacourse/mission-utils";

class GameView {
  async printGetInputMessage(message) {
    await MissionUtils.Console.print(message);
  }
}

export default GameView;
