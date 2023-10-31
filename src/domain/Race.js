import Console from '../Console.js';
import RacingCar from './RacingCar.js';
import Recorder from './Recorder.js';

class Race {
  cars = [];
  attemptCount = 0;
  recorder = new Recorder();

  async prepare() {
    const carNames = await Console.askCarNames();
    carNames.forEach((name) => {
      this.cars.push(new RacingCar(name));
    });
    this.attemptCount = await Console.askAttemptCount();
  }

  race() {
    while (this.attemptCount > 0) {
      this.cars.forEach((car) => {
        car.tryToMoveForward();
        car.showResultTo(this.recorder);
      });
      this.recorder.recordNextRound();
      this.attemptCount -= 1;
    }
    this.recorder.showResult();
  }
}

export default Race;
