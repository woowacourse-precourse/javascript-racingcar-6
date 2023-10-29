const InputView = require('./InputView');

const Cars = require('./Cars');
const cars = new Cars();

class CarRacingReferee {
  async raceStart() {
    cars.names = await InputView.readCarNames();
  }
}

module.exports = CarRacingReferee;
