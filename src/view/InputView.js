import { Console } from "@woowacourse/mission-utils";

import Validate from "../model/validate.js";

import MESSAGE from "../data/message.js";

const InputView = {
  async requestCars() {
    const input = await Console.readLineAsync(MESSAGE.CARNAME);
    const result = Validate.isCheckCarName(input.split(","));

    return result;
  },

  async requestNumber() {
    const input = await Console.readLineAsync(MESSAGE.NUMBER);
    Validate.isCheckNumber(input);

    return input;
  },
};

export default InputView;
