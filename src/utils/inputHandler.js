import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";
import {
  hasSameName,
  isIntegerNumber,
  isNoInput,
  isValidCountInput,
  isValidNameInput,
} from "./validation.js";

const inputHandler = {
  async getCarNamesAndCheck() {
    const carsInput = await Console.readLineAsync(INPUT_MESSAGE.CARS_NAME);
    await isNoInput(carsInput);
    const carArr = carsInput.split(",").map((name) => name.trim());
    isValidNameInput(carArr);
    hasSameName(carArr);
    return carArr;
  },

  async getRoundAndCheck() {
    const roundInput = await Console.readLineAsync(INPUT_MESSAGE.COUNT_NUMBER);
    await isNoInput(roundInput);
    const round = parseFloat(roundInput);
    isValidCountInput(round);
    isIntegerNumber(round);
    return round;
  },
};

export default inputHandler;
