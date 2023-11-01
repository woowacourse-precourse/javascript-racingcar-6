import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MSG, ERROR_MSG, MAGIC_NUM } from "../constants/Constants.js";
import InputValidator from "../validators/InputValidator.js";
import InputError from "../errors/InputError.js";

export default class InputHandler {
  static async getCarNames() {
    const carNamesInput = await MissionUtils.Console.readLineAsync(
      INPUT_MSG.CAR_NAMES
    );
    const carNames = carNamesInput.split(",").map((carName) => carName.trim());
    InputValidator.validateCarNames(carNames);
    return carNames;
  }

  static async getRaceCount() {
    const raceCount = await MissionUtils.Console.readLineAsync(
      INPUT_MSG.RACE_COUNT
    );
    const raceCountNumber = Number(raceCount);

    if (isNaN(raceCountNumber) || raceCountNumber < 1) {
      throw new InputError(ERROR_MSG.INVALID_RACE_COUNT);
    }

    return raceCountNumber;
  }
}
