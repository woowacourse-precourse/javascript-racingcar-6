import Car from "../model/Car.js";
import { playerInput, carNameInput, printStartResult } from "../view/View.js";

export default class RacingCarController {
  #CarArr = [];

  async play() {
    this.getCarNameInput(await carNameInput());
    this.test();
    this.getPlayerInput(await playerInput());
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
  }

  test() {
    console.log("test 시작");
    for (let i = 0; i < this.#CarArr.length; i++) {
      console.log(this.#CarArr[i].getCar());
    }
  }
}
