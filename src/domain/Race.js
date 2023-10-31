import Console from '../Console.js';
import RacingCar from './RacingCar.js';

class Race {
  cars = [];
  attemptCount = 0;

  async prepare() {
    const carNames = await Console.askCarNames();
    carNames.forEach((name) => {
      this.cars.push(new RacingCar(name));
    });
    this.attemptCount = await Console.askAttemptCount();
  }

  race() {
    while (this.attemptCount > 0) {
      this.cars.forEach((car) => car.tryToMoveForward());
      this.attemptCount -= 1;
    }
    console.log(this.cars);
  }
}

export default Race;
