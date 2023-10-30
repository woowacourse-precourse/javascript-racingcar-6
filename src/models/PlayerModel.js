import Validate from "../controllers/Validate.js";
import { Console } from "@woowacourse/mission-utils";
class PlayerModel {
  static INPUT_CHANCE_MESSAGE = "시도할 횟수는 몇 회인가요?\n";

  // 이동 횟수 입력하는 함수
  async inputChance() {
    const inputChance = await Console.readLineAsync(
      PlayerModel.INPUT_CHANCE_MESSAGE,
    );
    Console.print(this.validate.checkInput(inputChance));
  }
}
export default PlayerModel;
