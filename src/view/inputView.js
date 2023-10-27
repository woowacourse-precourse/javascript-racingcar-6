import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MSG } from "../constants/messages.js";

const inputView = {
  async CarList() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MSG.CAR_NAME);
    return input;
  },
};

export default inputView;
