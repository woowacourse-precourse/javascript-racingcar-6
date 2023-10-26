import { Console } from "@woowacourse/mission-utils";
import { GAME_START, GAME_ATTEMPTS, GAME_RESULT } from "../constants/Constants.js";

const ConsoleOutput = {
  printEmptyLine: () => {
    Console.print("");
  },

  printStartMessage: () => {
    Console.print(GAME_START);
  },

  printGetAttempts: () => {
    Console.print(GAME_ATTEMPTS);
  },

  printResultMessage: () => {
    Console.print(GAME_RESULT);
  },

  printResult: () => {
    Console.print(GAME_RESULT);
  },

  printGameResult: (carPositions) => {
    for (const car in carPositions) {
      let position = "-".repeat(carPositions[car]);
      Console.print(`${car} : ${position}`);
    }
  },

  printGameWinner: (winnerNames) => {
    Console.print(`최종 우승자: ${winnerNames}`);
  },
};

export default ConsoleOutput;
