import Car from "../model/Car.js";
import {
  playerInput,
  carNameInput,
  printStartResult,
  printMoveResult,
  printLine,
} from "../view/View.js";
import RandomInRange from "../utils/RandomNum.js";

export default class RacingCarController {
  #CarArr = [];

  async play() {
    this.getCarNameInput(await carNameInput());
    this.getPlayerInput(await playerInput());
    this.test();
  }

  getCarNameInput(input) {
    const splitInput = input.split(",");
    splitInput.forEach((carName) => {
      this.#CarArr.push(new Car(carName));
    });
  }

  getPlayerInput(input) {
    this.startRacing(input);
  }

  startRacing(count) {
    printStartResult();

    for (let i = 0; i < count; i++) {
      this.moveOnce();
    }
  }

  moveOnce() {
    this.#CarArr.forEach((car) => {
      car.setAdvance(RandomInRange());
    });
    this.printMoveOnce();
  }

  printMoveOnce() {
    this.#CarArr.forEach((car) => {
      const name = car.getName();
      const advance = car.getAdvance();
      printMoveResult(name, advance);
    });
    printLine();
  }

  test() {
    console.log("test 시작");
    for (let i = 0; i < this.#CarArr.length; i++) {
      console.log(this.#CarArr[i].getCar());
    }
  }
}
