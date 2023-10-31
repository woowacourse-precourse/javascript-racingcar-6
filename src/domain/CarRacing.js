import View from '../View.js';
import RacingCar from './RacingCar.js';
import Referee from './Referee.js';

class CarRacing {
  cars = [];
  numberOfRounds = 0;
  referee = new Referee();

  async prepare() {
    const carNames = await View.askCarNames();
    carNames.forEach((name) => {
      this.cars.push(new RacingCar(name));
    });
    this.numberOfRounds = await View.askNumberOfRounds();
    this.referee.recordNumberOfRound(this.numberOfRounds);
  }

  race() {
    for (let round = 0; round < this.numberOfRounds; round += 1) {
      this.cars.forEach((car) => {
        car.tryToMoveForward();
        car.showResultTo(this.referee, round);
      });
    }
    this.referee.showResults();
  }

  showWinners() {
    const winners = this.referee.findWinners();
    View.printWinners(winners);
  }
}

export default CarRacing;
