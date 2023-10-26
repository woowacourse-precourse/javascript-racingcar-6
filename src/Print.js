import { Console } from "@woowacourse/mission-utils";
import { ASK_CARS, ERROR } from "./constant/message.js";
import { separator } from "./constant/rule.js";
import Validate from "./Validate.js";

class Print {
  static async getCars() {
    const enteredCars = await Console.readLineAsync(ASK_CARS);

    const cars = enteredCars.split(separator.symbol);

    if (!Validate.eachCarNameLength(cars)) {
      throw new Error(ERROR.CAR_LENGTH);
    }

    return cars;
  }
}

export default Print;
