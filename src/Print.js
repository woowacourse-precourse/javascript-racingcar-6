import { Console } from "@woowacourse/mission-utils";
import { ASK_CARS, ASK_TRY_COUNT, ERROR } from "./constant/message.js";
import { separator } from "./constant/rule.js";
import Validate from "./Validate.js";

class Print {
  static async getCars() {
    const enteredCars = await Console.readLineAsync(ASK_CARS);

    const cars = enteredCars.split(separator.symbol).map((car) => car.trim());

    if (!Validate.eachCarNameLength(cars)) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }

    if (!Validate.minCarsLength(cars)) {
      throw new Error(ERROR.CARS_LENGTH);
    }

    if (Validate.eachCarNameHasBlank(cars)) {
      throw new Error(ERROR.CAR_NAME_HAS_BLANK);
    }

    return cars;
  }

  static async getTryCount() {
    const count = await Console.readLineAsync(ASK_TRY_COUNT);

    if (!Validate.isNumber(count)) {
      throw new Error(ERROR.COUNT_IS_NOT_NUMBER);
    }

    if (!Validate.minTryCount(count)) {
      throw new Error(ERROR.COUNT_LESS_THAN_MIN);
    }

    return count;
  }
}

export default Print;
