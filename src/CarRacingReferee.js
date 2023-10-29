const InputView = require('./InputView');

const Cars = require('./Cars');
const cars = new Cars();

class CarRacingReferee {
  async raceStart() {
    cars.names = await InputView.readCarNames();
    cars.attemptCount = await InputView.readAttemptCounts();
  }
}

module.exports = CarRacingReferee;
