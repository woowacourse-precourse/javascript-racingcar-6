import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../constants/Constants.js";

const ConsoleOutput = {
  printEmptyLine: () => {
    Console.print("");
  },

  printStartMessage: () => {
    Console.print(GAME_MESSAGES.START);
  },

  printGetAttempts: () => {
    Console.print(GAME_MESSAGES.ATTEMPTS);
  },

  printResultMessage: () => {
    Console.print(GAME_MESSAGES.RESULT);
  },

  printGameResult: (carPositions) => {
    for (const car in carPositions) {
      let position = "-".repeat(carPositions[car]);
      Console.print(`${car} : ${position}`);
    }
  },

  printGameWinner: (winnerNames) => {
    const winnerString = winnerNames.join(", ");
    Console.print(`최종 우승자 : ${winnerString}`);
  },
};

export default ConsoleOutput;
