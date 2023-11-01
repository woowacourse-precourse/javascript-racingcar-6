import RacingCars from "../domain/RacingCars.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class RacingCarController {
  #cars;
  #tries;
  #winners;

  constructor() {}

  async playGame() {
    await this.inputCarsName();
  }

  async inputCarsName() {
    await InputView.readCarsName((input) => {
      this.setCars(input);
    });
  }

  async inputTries() {
    await InputView.readTries((input) => {
      this.#tries = Number(input);
    });
    this.raceStart();
  }

  async setCars(cars) {
    this.#cars = new RacingCars(cars);
    await this.inputTries();
  }

  raceStart() {
    OutputView.printResultMessage();
    Array.from({ length: this.#tries }).forEach(() => {
      this.#cars.setMoveCondition();
      OutputView.printMoveMarking(this.#cars.getCurrentPosition());
      OutputView.printSingleLine();
    });
    this.raceResult();
  }

  raceResult() {
    this.#winners = this.#cars.getWinners();
    OutputView.printWinnerMessage(this.#winners);
  }
}

export default RacingCarController;
