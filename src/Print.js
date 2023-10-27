import { Console } from "@woowacourse/mission-utils";
import { ASK, MESSAGE } from "./constant/message.js";
import { SEPARATOR } from "./constant/rule.js";
import Validate from "./Validate.js";

class Print {
  static async getCars() {
    const enteredCars = await Console.readLineAsync(ASK.CARS);

    const validate = new Validate();

    validate.checkEnteredCarsIsValid(enteredCars);

    const cars = enteredCars
      .split(SEPARATOR.CARS.SYMBOL)
      .map((car) => car.trim());

    validate.checkEachOfCarsIsValid(cars);

    return cars;
  }

  static async getTryCount() {
    const count = await Console.readLineAsync(ASK.TRY_COUNT);

    const validate = new Validate();
    validate.checkTryCountIsValid(count);

    return count;
  }

  static showResultPhrase() {
    Console.print(MESSAGE.RESULT_PHRASE);
  }

  static showRaceResult(name, result) {
    Console.print(MESSAGE.RACING_RESULT(name, result));
  }

  static showEmptyNewLine() {
    Console.print("");
  }

  static showWinners(winners) {
    Console.print(MESSAGE.WINNERS(winners));
  }
}

export default Print;
