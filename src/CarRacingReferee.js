const InputView = require('./InputView');

const Cars = require('./Cars');
const OutputView = require('./OutputView');
const cars = new Cars();

class CarRacingReferee {
  async raceStart() {
    await this.getUserInputs();
    OutputView.printRacingResult();
  }

  async getUserInputs() {
    cars.names = await InputView.readCarNames();
    cars.attemptCount = await InputView.readAttemptCounts();
  }
}

module.exports = CarRacingReferee;
