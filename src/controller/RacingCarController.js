import Car from "../model/Car.js";
import { playerInput, carNameInput } from "../view/View.js";

export default class RacingCarController {
  #CarArr = [];

  constructor() {}

  async play() {
    this.initializeCar(await carNameInput());
    this.test();
    // const carNames = await carNameInput();
    // const getPlayerInput = await playerInput();
  }

  initializeCar(input) {
    const splitInput = input.split(",");
    splitInput.forEach((carName) => {
      this.#CarArr.push(new Car(carName));
    });
  }

  test() {
    for (let i = 0; i < this.#CarArr.length; i++) {
      console.log(this.#CarArr[i].getCar());
    }
  }
}
