import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "./Constants.js";

const User = {
  async getUserInput() {
    const userInput = (
      await Console.readLineAsync(IN_GAME_MESSAGE.getCarName)
    ).split(",");
    return userInput;
  },

};

export default User;
