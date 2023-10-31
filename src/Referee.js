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
    this.#cars = [];
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
    const winners = this.getWinners();
    OutputView.printWinners(winners);
  }

  moveCars() {
    this.#cars.forEach(car => {
      car.move();
      OutputView.printMoveCar(car);
    });
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map(car => car.position));
    const cars = this.#cars.filter(car => car.position === maxPosition);
    return cars.map(car => car.name);
  }
}

module.exports = Referee;
