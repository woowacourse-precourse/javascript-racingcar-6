import { Console } from "@woowacourse/mission-utils";
import { randomNumberGenerator } from "./RandomNumberGenerator";

export const moveCar = (carNames) => {
  carNames = carNames.map(({ name, score }) => ({
    name: name,
    score: score + +randomNumberGenerator(),
  }));
  carNames.map(({ name, score }) =>
    Console.print(`${name} : ${"-".repeat(score)}`)
  );
  Console.print("\n");
};
