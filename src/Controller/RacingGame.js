import Car from "../Model/Car.js";
import { InputView } from "../View/InputView.js";
import { OutputView } from "../View/OutputView.js";

class RacingGame {
  #car;
  constructor() {
    this.#car = [];
  }

  async start() {
    this.inputCarName();
  }
  
  async inputCarName() {
    const carArr = await InputView.inputCarsName();
    for (const carName of carArr) {
      let car = new Car();
      car.getName(carName);
      this.#car.push(car);
    }
    this.getTryNumber();
  }

  async getTryNumber() {
    const tryNumber = await InputView.inputTryNumber();
    await this.readyToExecutionResultMessage();
  }

  async readyToExecutionResultMessage() {
    OutputView.outputExcutionResultMessage();
  }
}

export default RacingGame;