import { Console } from "@woowacourse/mission-utils";

import { OUTPUT_MESSAGE } from "../constants/io-message.js";

const OutputView = {
  printRacingStart: () => {
    Console.print(OUTPUT_MESSAGE.ROUND_RESULT);
  },

  printCurrentRacingCar: (carName, carDistance) => {
    Console.print(`${carName} : ${"-".repeat(carDistance)}`);
  },

  printSpacing: () => {
    Console.print("");
  },

  printRacingFinalWinners: (winners) => {
    Console.print(`${OUTPUT_MESSAGE.FINAL_WINNERS} : ${winners}`);
  },
};

export default OutputView;
