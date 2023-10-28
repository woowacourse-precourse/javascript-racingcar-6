import { MissionUtils } from "@woowacourse/mission-utils";
import Game from "./Game.js";

class GameUi {
  constructor() {
    this.game = new Game();
  }

  //사용자가 차이름을 입력
  async askCarName() {
    const CAR_NAMES_INPUT = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.game.storeCarNames(CAR_NAMES_INPUT);
  }
}
export default GameUi;
