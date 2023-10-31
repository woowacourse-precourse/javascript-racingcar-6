import RacingCars from "../domain/RacingCars.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class RacingCarController {
  #cars;
  #maxDistance;
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
      this.#cars.setTries(input);
    });
    this.raceStart();
  }

  async setCars(cars) {
    this.#cars = new RacingCars(cars);
    await this.inputTries();
  }

  raceStart() {
    OutputView.printResultMessage();
    for (let i = 0; i < this.#cars.getTries(); i++) {
      this.#cars.setMoveCondition();
      OutputView.printMoveMarking(this.#cars.getCurrentPosition());
      OutputView.printSingleLine();
    }
    this.raceResult();
  }

  raceResult() {
    this.#maxDistance = this.#cars.getMaxDistance();
    this.#winners = this.#cars.getWinners(this.#maxDistance);
    OutputView.printWinnerMessage(this.#winners);
  }
}

export default RacingCarController;
