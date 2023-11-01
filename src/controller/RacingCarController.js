import Car from '../model/Car.js';
import {
  playerInput,
  carNameInput,
  printStartResult,
  printMoveResult,
  printLine,
  printRacingResult,
} from '../view/View.js';
import RandomInRange from '../utils/RandomInRange.js';
import CheckWinner from '../utils/CheckWinner.js';

export default class RacingCarController {
  #CarArr = [];

  async play() {
    this.getCarNameInput(await carNameInput());
    this.getPlayerInput(await playerInput());
  }

  getCarNameInput(input) {
    const splitInput = input.split(',');
    splitInput.forEach((carName) => {
      this.#CarArr.push(new Car(carName));
    });
  }

  getPlayerInput(input) {
    this.racingStart(input);
  }

  racingStart(count) {
    printStartResult();

    for (let i = 0; i < count; i++) {
      this.racingMoveOnce();
    }
    this.getWinner();
  }

  racingMoveOnce() {
    this.#CarArr.forEach((car) => {
      car.setAdvance(RandomInRange());
    });
    this.racingPrintMoveOnce();
  }

  racingPrintMoveOnce() {
    this.#CarArr.forEach((car) => {
      const name = car.getName();
      const advance = car.getAdvance();
      printMoveResult(name, advance);
    });
    printLine();
  }

  getWinner() {
    const winner = CheckWinner(this.#CarArr).join(', ');
    printRacingResult(winner);
  }
}
