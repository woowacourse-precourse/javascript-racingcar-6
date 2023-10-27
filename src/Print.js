import { Console } from "@woowacourse/mission-utils";
import { ASK, ERROR, MESSAGE } from "./constant/message.js";
import { SEPARATOR } from "./constant/rule.js";
import Validate from "./Validate.js";

class Print {
  static async getCars() {
    const enteredCars = await Console.readLineAsync(ASK.CARS);

    if (Validate.eachSideContainComma(enteredCars)) {
      throw new Error(ERROR.CARS_START_AND_END_WITH_COMMA);
    }

    const cars = enteredCars
      .split(SEPARATOR.CARS.SYMBOL)
      .map((car) => car.trim());

    if (!Validate.eachCarNameLength(cars)) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }

    if (!Validate.minCarsLength(cars)) {
      throw new Error(ERROR.CARS_LENGTH);
    }

    if (Validate.eachCarNameHasBlank(cars)) {
      throw new Error(ERROR.CAR_NAME_HAS_BLANK);
    }

    if (Validate.anyDuplicateCarName(cars)) {
      throw new Error(ERROR.CARS_NAME_DUPLICATED);
    }

    return cars;
  }

  static async getTryCount() {
    const count = await Console.readLineAsync(ASK.TRY_COUNT);

    if (!Validate.isNumber(count)) {
      throw new Error(ERROR.COUNT_IS_NOT_NUMBER);
    }

    if (!Validate.minTryCount(count)) {
      throw new Error(ERROR.COUNT_LESS_THAN_MIN);
    }

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
