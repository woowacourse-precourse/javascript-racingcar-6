import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "./Constants.js";
import ValidationName from "../validation/ValidationName.js";
import ValidationTry from "../validation/ValidatonTry.js";

const User = {
  async getCarNames() {
    const userInput = (
      await Console.readLineAsync(IN_GAME_MESSAGE.getCarName)
    ).split(",");

    ValidationName.isCorrectName(userInput);

    return userInput;
  },

  async getTryCount() {
    const tryCount = (await Console.readLineAsync(IN_GAME_MESSAGE.getTryCount));
    Console.print(tryCount);
    
    ValidationTry.isCorrectTryCount(tryCount);

    return tryCount;
  },
};

export default User;
