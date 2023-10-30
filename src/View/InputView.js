import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";

class InputView {
  static async getCarNameInput() {
    const carNameList = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.carName);
    return carNameList
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name !== "");
  }

  static async getRaceCountInput() {
    const raceCount = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.raceCount);
    return Number(raceCount);
  }
}

export default InputView;
