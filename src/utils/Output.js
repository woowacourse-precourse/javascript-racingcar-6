import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant.js";

const Output = {
  result() {
    Console.print(MESSAGE.turn);
  },
  racingResult(car, distance) {
    Console.print(`${car.getName()} : ${Array.from({ length: distance }, () => '-').join('')}`);
  },
  winner(names) {
    Console.print(`${MESSAGE.end} : ${names.join(', ')}`);
  },
}

export { Output };