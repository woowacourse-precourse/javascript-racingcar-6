import { Random, Console } from '@woowacourse/mission-utils';
import { parseValidCarNames, parseValidNumber } from './Validations';
import { PRINT, SET_MOVE_CONDITION } from './constants';

class Game {
  #cars = new Map();

  #moveCount = 0;

  #maxDistance = 0;

  async start() {
    await this.#interface();
    for (let i = 0; i < this.#moveCount; i += 1) {
      this.#race();
    }
    this.#printResult();
  }

  async #initializeCars(arrayCar) {
    if (!arrayCar || !Array.isArray(arrayCar))
      throw new Error(PRINT.ERROR.INPUT);

    arrayCar.forEach((car) => this.#cars.set(car, 0));
  }

  async #interface() {
    // set #cars
    const arrayCars = await parseValidCarNames(
      await Console.readLineAsync(PRINT.MESSAGE.INPUT_CARS),
      ',',
    );
    await this.#initializeCars(arrayCars);

    // set #moveCount
    const inputCount = parseValidNumber(
      await Console.readLineAsync(PRINT.MESSAGE.INPUT_NUMBER),
    );
    if (!inputCount) throw new Error(PRINT.ERROR.INPUT);

    this.#moveCount = inputCount;
  }

  // 각 차들을 조회해서 4이상이면 go 아니면 멈춤
  #race() {
    this.#cars.forEach((distance, name) => {
      const isMoving = SET_MOVE_CONDITION <= Random.pickNumberInRange(0, 9);
      if (isMoving) this.#moveForward(name, distance + 1);
      Console.print(PRINT.MESSAGE.EXECUTION_RESULT(name, this.#cars.get(name)));
    });
    Console.print('\n');
  }

  #moveForward = (name, distance) => {
    this.#cars.set(name, distance + 1);
    if (this.#maxDistance < this.#cars.get(name))
      this.#maxDistance = this.#cars.get(name);
  };

  #printResult() {
    const winner = [];
    this.#cars.forEach((distance, name) => {
      if (distance === this.#maxDistance) winner.push(name);
    });
    Console.print(PRINT.MESSAGE.WINNER(winner.join(', ')));
  }
}
export default Game;
