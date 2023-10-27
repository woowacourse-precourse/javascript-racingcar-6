import { PrintMessage } from "../static/Static.js";
import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async readCarsName(callback) {
    await Console.readLineAsync(PrintMessage.INPUT_NAMES).then((input) => {
      callback(input);
    });
  },

  async readTryTimes(callback) {
    await Console.readLineAsync(PrintMessage.INPUT_TIMES).then((input) => {
      callback(input);
    });
  },
};

export default InputView;
