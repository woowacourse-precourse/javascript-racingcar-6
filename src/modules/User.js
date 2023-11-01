import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "./Constants.js";
import ValidationName from "../validation/ValidationName.js";
import ValidationTry from "../validation/ValidatonTry.js";

const User = {
  async readyToPlay() {
    const nameList = await this.enterNames();
    const tryCount = await this.enterTryCounts();

    return [nameList, tryCount];
  },

  async enterNames() {
    const userInput = (
      await Console.readLineAsync(IN_GAME_MESSAGE.getCarName)
    ).split(",");

    ValidationName.checkName(userInput);

    return userInput;
  },

  async enterTryCounts() {
    const tryCount = await Console.readLineAsync(IN_GAME_MESSAGE.getTryCount);
    Console.print(tryCount);

    ValidationTry.checkTryCount(tryCount);

    return tryCount;
  },
};

export default User;
