import InputValidator from "../utils/InputValidator.js";
import { PrintMessage } from "../static/Static.js";
import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async readCarsName(callback) {
    try {
      const input = await Console.readLineAsync(PrintMessage.INPUT_NAMES);
      InputValidator.validateCarName(input);
      callback(input);
    } catch (error) {
      throw new Error(error);
    }
  },

  async readTryTimes(callback) {
    try {
      const input = await Console.readLineAsync(PrintMessage.INPUT_TIMES);
      InputValidator.validateTimesNumber(input);
      callback(input);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default InputView;
