const InputView = require('./InputView');

const Cars = require('./Cars');
const OutputView = require('./OutputView');
const cars = new Cars();

class CarRacingReferee {
  async raceStart() {
    cars.names = await InputView.readCarNames();
    cars.attemptCount = await InputView.readAttemptCounts();
    OutputView.printRacingResult();
  }
}

module.exports = CarRacingReferee;
