import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "./Constants.js";

const User = {
  async getCarNames() {
    const userInput = (
      await Console.readLineAsync(IN_GAME_MESSAGE.getCarName)
    ).split(",");
    return userInput;
  },

  async getTryCount() {
    const tryCount = (await Console.readLineAsync(IN_GAME_MESSAGE.getTryCount));
    return tryCount;
  },
};

export default User;
