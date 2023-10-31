import { Console } from "@woowacourse/mission-utils";
import { moveCar } from "./MoveCar";

export const playGame = (trialNumbers, input, carNames) => {
  Console.print("\n실행 결과");

  while (trialNumbers < input) {
    moveCar(carNames);
    trialNumbers = trialNumbers + 1;
  }
};
