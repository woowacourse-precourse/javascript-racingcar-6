import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";

class InputView {
  static async getCarNameInput() {
    const carName = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.carName);
    return carName && carName.split(",").map((name) => name.trim());
  }

  static async getRaceCountInput() {
    const raceCount = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.raceCount);
    return Number(raceCount);
  }
}

export default InputView;
