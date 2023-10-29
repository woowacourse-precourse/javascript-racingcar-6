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

  printRacingFinalWinners: (carsObject, maxDistance) => {
    Console.print(
      `${OUTPUT_MESSAGE.FINAL_WINNERS} : ${Object.entries(carsObject)
        .filter(([carName, carDistance]) => carDistance === maxDistance)
        .map(([carName, carDistance]) => carName)}`
    );
  },
};

export default OutputView;
