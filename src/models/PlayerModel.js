import RaceController from "../controllers/RaceController.js";
import Validate from "../controllers/Validate.js";

import { Console } from "@woowacourse/mission-utils";
class PlayerModel {
  static INPUT_CHANCE_MESSAGE = "시도할 횟수는 몇 회인가요?\n";

  constructor() {
    this.validate = new Validate();
    this.raceController = new RaceController();
  }
  // 이동 횟수 입력하는 함수
  async inputChance() {
    const inputChance = await Console.readLineAsync(
      PlayerModel.INPUT_CHANCE_MESSAGE,
    );
    return inputChance;
    // if (this.validate.checkInput(inputChance)) {
    //   this.raceController.moveCar(inputChance);
    // }
  }
}
export default PlayerModel;
