import { Console } from "@woowacourse/mission-utils";

import MESSAGE from "../data/message.js";

const InputView = {
  async requestCars() {
    const input = await Console.readLineAsync(MESSAGE.CARNAME);

    return input.split(",");
  },

  async requestNumber() {
    const input = await Console.readLineAsync(MESSAGE.NUMBER);

    return input;
  },
};

export default InputView;
