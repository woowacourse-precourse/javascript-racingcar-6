import { Random, Console } from "@woowacourse/mission-utils";
import { parseValidCarNames, parseValidNumber } from "./Validations.js";
import { PRINT, SET_MOVE_CONDITION } from "./constants.js";

class Game {
  #cars = new Map();
  #moveCount = 0;
  #maxDistance = 0;
  constructor() {}

  async start() {
    await this.#interface();
    for (let i = 0; i < this.#moveCount; i++) {
      await this.#race();
    }
    await this.#printResult();
  }

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

  // 각 차들을 조회해서 4이상이면 go 아니면 멈춤
  async #race() {
    // 출력
    for (let [name, distance] of this.#cars) {
      const isMoving = SET_MOVE_CONDITION <= Random.pickNumberInRange(0, 9);
      if (isMoving) {
        this.#cars.set(name, distance + 1);
        if (this.#maxDistance < this.#cars.get(name)) {
          this.#maxDistance = this.#cars.get(name);
        }
      }

      Console.print(PRINT.MESSAGE.EXECUTION_RESULT(name, this.#cars.get(name)));
    }
    Console.print("\n");
  }

  async #printResult() {
    const winner = [];
    for (let [name, distance] of this.#cars) {
      if (distance === this.#maxDistance) {
        winner.push(name);
      }
    }
    Console.print(PRINT.MESSAGE.WINNER(winner.join(", ")));
  }
}
export default Game;
