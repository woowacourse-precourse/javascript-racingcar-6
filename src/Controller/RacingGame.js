import Car from "../Model/Car.js";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
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
    this.getExecutionResult(tryNumber);
  }

  async readyToExecutionResultMessage() {
    OutputView.outputExecutionResultMessage();
  }

  async getExecutionResult(tryNumber) {
    for (let i = 0; i < tryNumber; i++) {
      await this.decidePosition();
      await this.getExecutionResultBoard();
      console.log();
    }
  }
  
  async decidePosition() {
    for (const car of this.#car) {
      const randomNumber = await RandomNumberGenerator.getRandomNumber()
      car.checkPosition(randomNumber);
    }
  }

  async getExecutionResultBoard(){
    for (const car of this.#car) {
      const nowPosition = await car.getPosition();
      await OutputView.outputExecutionResultBoard(car.name, nowPosition);
    }
  }

}

export default RacingGame;