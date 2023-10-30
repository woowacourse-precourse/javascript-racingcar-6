import RacingCar from "../domain/RacingCar.js";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { StaticNumber } from "../static/Static.js";

class RacingCarController {
  #cars;
  #finalDistance = [];
  #winners = [];

  constructor() {}

  async playGame() {
    await this.inputCarsName();
  }

  async inputCarsName() {
    await InputView.readCarsName((input) => {
      this.setCars(input);
    });
  }

  async inputTryTimes() {
    await InputView.readTryTimes((input) => {
      this.handleMovement(input);
    });
  }

  async setCars(cars) {
    this.#cars = cars.split(",").map((name) => new RacingCar(name));
    await this.inputTryTimes();
  }

  handleMovement(times) {
    OutputView.printResultMessage();
    times = Number(times);
    for (let i = 0; i < times; i++) {
      this.calculateMovement();
      OutputView.printSingleLine();
    }
    this.handleWinners();
  }

  handleWinners() {
    this.#cars.map((car) => {
      if (car.getCurrentDistance() === this.calculateMaxDistance())
        this.#winners.push(car.getName());
    });
    OutputView.printWinnerMessage(this.#winners);
  }

  calculateMovement() {
    this.#cars.forEach((car) => {
      const randomNumber = RandomNumberGenerator.generate();

      if (randomNumber >= StaticNumber.CAN_MOVE_CONDITION) car.move();

      OutputView.printMoveMarking(car.getName(), car.getCurrentDistance());
    });
  }

  calculateMaxDistance() {
    this.#cars.map((car) => {
      this.#finalDistance.push(car.getCurrentDistance());
    });

    return Math.max(...this.#finalDistance);
  }
}

export default RacingCarController;
