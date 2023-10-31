import Console from '../Console.js';
import RacingCar from './RacingCar.js';
import Recorder from './Recorder.js';

class Race {
  cars = [];
  numberOfRounds = 0;
  recorder = new Recorder();

  async prepare() {
    const carNames = await Console.askCarNames();
    carNames.forEach((name) => {
      this.cars.push(new RacingCar(name));
    });
    this.numberOfRounds = await Console.askNumberOfRounds();
  }

  race() {
    while (this.numberOfRounds > 0) {
      this.cars.forEach((car) => {
        car.tryToMoveForward();
        car.showResultTo(this.recorder);
      });
      this.recorder.recordNextRound();
      this.numberOfRounds -= 1;
    }
    this.recorder.showResult();
  }
}

export default Race;
