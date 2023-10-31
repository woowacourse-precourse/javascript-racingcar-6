const InputView = require('./InputView');
const OutputView = require('./OutputView');

const Car = require('./Car');

class Referee {
  attemptCounts;
  #cars;

  constructor() {
    this.attemptCounts = 0;
    this.#cars = [];
  }

  async raceStart() {
    await this.getUserInputs();
  }

  async getUserInputs() {
    const carNames = await InputView.readCarNames();
    this.saveCarNames(carNames);
    this.attemptCounts = await InputView.readAttemptCounts();
  }

  saveCarNames(carNames) {
    carNames.forEach(name => {
      const car = new Car(name);
      this.#cars.push(car);
    });
  }
}

module.exports = Referee;
