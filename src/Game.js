import { Random, Console } from "@woowacourse/mission-utils";
import { parseValidCarNames, parseValidNumber } from "./Validations.js";
import { PRINT, SET_MOVE_CONDITION } from "./constants.js";

class Game {
  #cars = new Map();
  #moveCount = 0;
  #maxDistance = 0;
  constructor() {}

  async #initializeCars(arrayCar) {
    if (!arrayCar || !Array.isArray(arrayCar))
      throw new Error(PRINT.ERROR.INPUT);

    for (let car of arrayCar) {
      this.#cars.set(car, 0);
    }
  }

  async #interface() {
    // set #cars
    const arrayCars = await parseValidCarNames(
      await Console.readLineAsync(PRINT.MESSAGE.INPUT_CARS),
      ","
    );
    await this.#initializeCars(arrayCars);

    // set #moveCount
    const inputCount = await parseValidNumber(
      await Console.readLineAsync(PRINT.MESSAGE.INPUT_NUMBER)
    );
    if (!inputCount) throw new Error(PRINT.ERROR.INPUT);

    this.#moveCount = inputCount;
  }
}
export default Game;
