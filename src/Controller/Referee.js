const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');

const Car = require('../Model/Car');
const car = new Car();

class Referee {
  tryCounts;
  #cars;

  constructor() {
    this.tryCounts = 0;
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
    this.saveCarsInfo(carNames);
    this.tryCounts = await InputView.readTryCounts();
  }

  saveCarsInfo(carNames) {
    carNames.forEach(name => {
      const car = new Car(name);
      this.#cars.push(car);
    });
  }

  racingGame() {
    while (this.tryCounts > 0) {
      this.moveCars();
      this.tryCounts -= 1;
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
