import { Console } from "@woowacourse/mission-utils";

const OUTPUT_MESSAGE = Object.freeze({
  ROUND_RESULT: "\n실행 결과",
  FINAL_WINNERS: "최종 우승자",
});

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
