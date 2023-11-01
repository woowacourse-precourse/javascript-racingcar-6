import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";
import { CAR_NAME } from "../constants/car.js";

class InputView {
  static async getCarNameInput() {
    const carNameList = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME);
    return carNameList
      .split(CAR_NAME.INPUT_SEPARATOR)
      .map((name) => name.trim())
      .filter((name) => name !== CAR_NAME.NO_INPUT_STRING);
  }

  static async getRaceCountInput() {
    const raceCount = await Console.readLineAsync(INPUT_MESSAGE.RACE_COUNT);
    return raceCount && Number(raceCount);
  }
}

export default InputView;
