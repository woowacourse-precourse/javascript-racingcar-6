import View from '../View.js';
import RacingCar from './RacingCar.js';
import Referee from './Referee.js';

class CarRacing {
  #cars = [];
  #numberOfRounds = 0;
  #referee = new Referee();

  async prepare() {
    const carNames = await View.askCarNames();
    this.#cars = carNames.map((name) => new RacingCar(name));
    this.#numberOfRounds = await View.askNumberOfRounds();
    this.#referee.recordNumberOfRound(this.#numberOfRounds);
  }

  race() {
    // 인덱스가 0부터 시작하기 때문에 0라운드가 첫 번째 라운드
    for (let round = 0; round < this.#numberOfRounds; round += 1) {
      this.#cars.forEach((car) => {
        car.tryToMoveForward();
        car.showResultTo(this.#referee, round);
      });
    }
  }

  showTotalResults() {
    View.printTotalResults(this.#referee.totalResults);
  }

  showWinners() {
    const winners = this.#referee.findWinners();
    View.printWinners(winners);
  }
}

export default CarRacing;
