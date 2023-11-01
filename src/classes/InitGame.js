import { Console } from "@woowacourse/mission-utils";
import {
  ERROR_CAR_NAMES,
  ERROR_GAME_COUNT_FORMAT,
  ERROR_NAME_FORMAT,
  PROMPT_CAR_NAMES,
  PROMPT_GAME_COUNT,
} from "../utills/Constants.js";

export default class InitGame {
  constructor() {
    this.carList = [];
    this.gameCount = 0;
  }

  async init() {
    this.carList = this.#validateCarList(
      await Console.readLineAsync(PROMPT_CAR_NAMES)
    );

    this.gameCount = this.#validateGameCount(
      await Console.readLineAsync(PROMPT_GAME_COUNT)
    );
  }

  #validateCarList(carList) {
    const isLengthZero = carList.length === 0;
    if (isLengthZero) {
        throw new Error(ERROR_CAR_NAMES);
      }
  
    carList = carList.split(",");

    const isLengthOverOrHasBlank = carList.some(
      (car) => car.length > 5 || car.includes(" ")
    );

    if (isLengthOverOrHasBlank) {
      throw new Error(ERROR_NAME_FORMAT);
    }

    return carList;
  }
  #validateGameCount(gameCount) {
    gameCount = parseInt(gameCount)
    const IsCountNotNumber = isNaN(gameCount);

    if (IsCountNotNumber) {
      throw new Error(ERROR_GAME_COUNT_FORMAT);
    }

    return gameCount;
  }
}
