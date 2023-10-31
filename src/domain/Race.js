import View from '../View.js';
import RacingCar from './RacingCar.js';
import Recorder from './Recorder.js';

class Race {
  cars = [];
  numberOfRounds = 0;
  recorder = new Recorder();

  async prepare() {
    const carNames = await View.askCarNames();
    carNames.forEach((name) => {
      this.cars.push(new RacingCar(name));
    });
    this.numberOfRounds = await View.askNumberOfRounds();
    this.recorder.recordNumberOfRound(this.numberOfRounds);
  }

  race() {
    for (let round = 0; round < this.numberOfRounds; round += 1) {
      this.cars.forEach((car) => {
        car.tryToMoveForward();
        car.showResultTo(this.recorder, round);
      });
    }
    this.recorder.showResults();
  }
}

export default Race;
