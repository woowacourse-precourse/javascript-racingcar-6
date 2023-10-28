import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';
import InputCars from './InputCars.js';
import InputMoveCount from './InputMoveCount.js';
import {
  OUTPUT_MESSAGES,
  SEPARATORS,
  MINIMUM_MOVE_NUMBER,
} from './utils/messages.js';

class App {
  #carNames = [];
  #moveCount;

  async play() {
    await this.setCarNames();
  }

  async setCarNames() {
    const inputCars = new InputCars();
    this.#carNames = await inputCars.createCars();
    await this.movementCount();
  }

  async movementCount() {
    const inputMoveCount = new InputMoveCount();
    this.#moveCount = await inputMoveCount.getMoveCount();

    this.startRace();
  }

  startRace() {
    const move = this.#moveCount;
    Console.print(OUTPUT_MESSAGES.result_message);

    for (let i = 0; i < move; i++) {
      this.calculateMove();
    }

    this.printWinner();
  }

  calculateMove() {
    this.#carNames.forEach(car => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= MINIMUM_MOVE_NUMBER) {
        car.printPosition();
      }
      this.showProgress(car.getName(), car.getPosition());
    });
    Console.print(SEPARATORS.space);
  }

  showProgress(name, position) {
    Console.print(`${name} : ${position.join(SEPARATORS.no_separator)}`);
  }

  printWinner() {
    const maxPosition = Math.max(
      ...this.#carNames.map(car => car.getPosition().length),
    );
    const winners = this.#carNames.filter(
      car => car.getPosition().length === maxPosition,
    );
    Console.print(
      OUTPUT_MESSAGES.winner_message +
        winners.map(car => car.getName()).join(SEPARATORS.list_separator),
    );
  }
}

export default App;
