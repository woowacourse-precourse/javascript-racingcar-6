import InputValidator from "../utils/InputValidator.js";
import { PrintMessage, ErrorMessage } from "../static/Static.js";
import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async readCarsName(callback) {
    try {
      await Console.readLineAsync(PrintMessage.INPUT_NAMES).then((input) => {
        InputValidator.validateCarName(input);
        callback(input);
      });
    } catch (error) {
      Console.print(error);
    }
  },

  async readTryTimes(callback) {
    try {
      await Console.readLineAsync(PrintMessage.INPUT_TIMES).then((input) => {
        InputValidator.validateTimesNumber(input);
        callback(input);
      });
    } catch (error) {
      Console.print(error);
    }
  },
};

export default InputView;
