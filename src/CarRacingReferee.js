const InputView = require('./InputView');

const Cars = require('./Cars');
const OutputView = require('./OutputView');
const cars = new Cars();

class CarRacingReferee {
  #attemptCounts;

  constructor() {
    this.#attemptCounts = 0;
  }

  async raceStart() {
    await this.getUserInputs();
    OutputView.printRacingResult();
  }

  async getUserInputs() {
    cars.names = await InputView.readCarNames();
    this.#attemptCount = await InputView.readAttemptCounts();
  }
}

module.exports = CarRacingReferee;
