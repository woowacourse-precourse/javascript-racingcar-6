import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";
import { isNoInput } from "./validation.js";

const inputFunc = {
  async getCarNames() {
    const carsInput = await Console.readLineAsync(INPUT_MESSAGE.CARS_NAME);
    await isNoInput(carsInput);
    return carsInput.split(",").map((name) => name.trim());
  },
  async getCountNumber() {
    const countInput = await Console.readLineAsync(INPUT_MESSAGE.COUNT_NUMBER);
    await isNoInput(countInput);
    return parseFloat(countInput);
  },
};

export default inputFunc;
