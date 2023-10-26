import { Console } from "@woowacourse/mission-utils";
import { ASK_CARS } from "./constant/message.js";

class Print {
  static async getCars() {
    const cars = await Console.readLineAsync(ASK_CARS);

    return cars;
  }
}

export default Print;
