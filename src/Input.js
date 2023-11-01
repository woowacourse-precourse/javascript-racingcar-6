import { MissionUtils } from "@woowacourse/mission-utils";
import { INFORMATION_MESSEAGE } from "./const/messageData.js";

const Input = {
  async carNames() {
    const carNames = await MissionUtils.Console.readLineAsync(
      INFORMATION_MESSEAGE.CAR_NAMES_INPUT
    );
    return carNames;
  },
  async tryCount() {
    const tryCount = await MissionUtils.Console.readLineAsync(
      INFORMATION_MESSEAGE.TRY_COUNT_INPUT
    );
    return tryCount;
  },
};

export default Input;
