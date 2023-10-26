import { Console } from "@woowacourse/mission-utils";
import { GAME_START, GAME_ATTEMPTS } from "../constants/Constants.js";

const ConsoleOutput = {
  printStartMessage: () => {
    Console.print(GAME_START);
  },

  printGetAttempts: () => {
    Console.print(GAME_ATTEMPTS);
  },
};

export default ConsoleOutput;
