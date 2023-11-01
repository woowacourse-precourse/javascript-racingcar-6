import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants/Message";
import CarNameValidator from "../validate/CarNameValidator";
import RaceTrialValidator from "../validate/RaceTrialValidator";

class InputView {
  static async getCarNames() {
    Console.print(GAME_MESSAGE.inputName);
    const carNames = await Console.readLineAsync("");
    CarNameValidator.validateNames(carNames);
    return carNames;
  }

  static async getRaceTrial() {
    Console.print(GAME_MESSAGE.inputNumber);
    const raceTrial = await Console.readLineAsync("");
    RaceTrialValidator.validateTrial(raceTrial);
    return raceTrial;
  }
}

export default InputView;
