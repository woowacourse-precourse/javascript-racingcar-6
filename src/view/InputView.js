import InputValidator from "../utils/InputValidator.js";
import { PRINT_MESSAGE } from "../static/Static.js";
import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async readCarsName(callback) {
    try {
      const input = await Console.readLineAsync(PRINT_MESSAGE.inputNames);
      InputValidator.validateCarName(input);
      callback(input);
    } catch (error) {
      throw new Error(error);
    }
  },

  async readTries(callback) {
    try {
      const input = await Console.readLineAsync(PRINT_MESSAGE.inputTries);
      InputValidator.validateTimesNumber(input);
      callback(input);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default InputView;
