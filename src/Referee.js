const InputView = require('./InputView');
const OutputView = require('./OutputView');

const Car = require('./Car');
const car = new Car();

class Referee {
  attemptCounts;
  #cars;

  constructor() {
    this.attemptCounts = 0;
    this.#cars = [];
  }

  async raceStart() {
    await this.getUserInputs();
    OutputView.printRaceResult();
    this.racingGame();
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

  racingGame() {
    while (this.attemptCounts > 0) {
      this.moveCars();
      this.attemptCounts -= 1;
    }
  }

  moveCars() {
    this.#cars.forEach(car => {
      car.move();
      OutputView.printMoveCar(car);
    });
  }
}

module.exports = Referee;
