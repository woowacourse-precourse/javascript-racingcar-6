import Car from "../Model/Car.js";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
import { InputView } from "../View/InputView.js";
import { OutputView } from "../View/OutputView.js";

class RacingGame {
  #car;
  #maxPosition;
  #winner;
  constructor() {
    this.#car = [];
    this.#maxPosition = 0;
    this.#winner = [];
  }
  
  async start() {
    await this.inputCarName();
  }
  
  async inputCarName() {
    const carArr = await InputView.inputCarsName();
    for (const carName of carArr) {
      let car = new Car();
      car.getName(carName);
      this.#car.push(car);
    }
    await this.getTryNumber();
  }

  async getTryNumber() {
    const tryNumber = await InputView.inputTryNumber();
    await this.readyToExecutionResultMessage();
    await this.getExecutionResult(tryNumber);
  }

  async readyToExecutionResultMessage() {
    await OutputView.outputExecutionResultMessage();
  }

  async getExecutionResult(tryNumber) {
    for (let i = 0; i < tryNumber; i++) {
      await this.getExecutionResultBoard();
    }
    await this.findWinner();
  }
  
  async getExecutionResultBoard(){
    for (const car of this.#car) {
      await this.decidePosition(car);
      const nowPosition = await car.getPosition();
      await OutputView.outputExecutionResultBoard(car.name, nowPosition);
    }
    console.log();
  }
  
  async decidePosition(car) {
    const randomNumber = await RandomNumberGenerator.getRandomNumber()
    car.checkPosition(randomNumber);
  }
  

  async findWinner() {
    for (const car of this.#car) {
      await this.getWinnerList(car);
    }
    await this.showWinner();
  }

  async getWinnerList(car) {
    const nowCarPosition = car.getPosition();
    if (nowCarPosition > this.#maxPosition) {
      this.#maxPosition = nowCarPosition;
      this.#winner = [];
      this.#winner.push(car.name);
    } else if (nowCarPosition === this.#maxPosition) {
      this.#winner.push(car.name);
    }
  }

  async showWinner() {
    await OutputView.outputWinnerResult(this.#winner);
  }
}

export default RacingGame;