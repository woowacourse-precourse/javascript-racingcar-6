import { Console } from "@woowacourse/mission-utils";

import Validate from "../model/validate.js";

import { MESSAGE } from "../data/message.js";

const InputView = {
  async requestCars() {
    const input = await Console.readLineAsync(MESSAGE.CARNAME);
    Validate.isCheckCarName(input);

    return input.split(",");
  },

  async requestNumber() {
    const input = await Console.readLineAsync(MESSAGE.NUMBER);
    Validate.isCheckNumber(input);

    return Number(input);
  },
};

export default InputView;
