import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printRacingStart: () => {
    Console.print("\n실행 결과");
  },

  printCurrentRacingCar: (carName, carDistance) => {
    Console.print(`${carName} : ${"-".repeat(carDistance)}`);
  },

  printSpacing: () => {
    Console.print("");
  },

  printRacingFinalWinners: (carsObject, maxDistance) => {
    Console.print(
      `최종 우승자 : ${Object.entries(carsObject)
        .filter(([carName, carDistance]) => carDistance === maxDistance)
        .map(([carName, carDistance]) => carName)}`
    );
  },
};

export default OutputView;
