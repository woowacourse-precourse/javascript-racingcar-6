import Car from "../model/Car.js";
import {
  playerInput,
  carNameInput,
  printStartResult,
  printMoveResult,
  printLine,
  printRacingResult,
} from "../view/View.js";
import RandomInRange from "../utils/RandomNum.js";

export default class RacingCarController {
  #CarArr = [];

  async play() {
    this.getCarNameInput(await carNameInput());
    this.getPlayerInput(await playerInput());
  }

  getCarNameInput(input) {
    const splitInput = input.split(",");
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
    const winner = this.checkWinner(this.#CarArr).join(", ");
    printRacingResult(winner);
  }

  checkWinner(carArr) {
    const winnerList = [];
    let max = 0;

    carArr.forEach((car) => {
      const carAdvance = car.getAdvance();
      if (carAdvance > max) {
        max = carAdvance;
      }
    });

    carArr.forEach((car) => {
      const carAdvance = car.getAdvance();
      if (carAdvance === max) {
        winnerList.push(car.getName());
      }
    });

    return winnerList;
  }
}
