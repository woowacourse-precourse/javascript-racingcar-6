import CarRace from '../models/CarRace.js';
import Car from '../models/Car.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class CarRaceController {
  #inputView;

  #outputView;

  #carRace;

  #raceTryCount;

  constructor(inputView = new InputView(), outputView = new OutputView()) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async setupRaceEnvironment() {
    const carNames = await this.#inputView.readCarNames();
    const raceCars = carNames.map((car) => new Car(car));
    this.#carRace = new CarRace(raceCars);

    const tryCount = await this.#inputView.readTryCount();
    this.#raceTryCount = tryCount;
  }

  processRace() {
    this.#outputView.printRaceResultMessage();

    Array.from({ length: this.#raceTryCount }).forEach(() => {
      this.#carRace.runQuarter();
      this.#outputView.printQuarterResult(this.#carRace.getRaceCars());
    });
  }

  printRaceResult() {
    const raceWinners = this.#carRace.findRaceWinners();
    this.#outputView.printRaceWinners(raceWinners);
  }

  getCarRace() {
    return this.#carRace;
  }

  getRaceTryCount() {
    return this.#raceTryCount;
  }
}

export default CarRaceController;
