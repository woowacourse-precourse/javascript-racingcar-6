import InputView from './InputView.js';
import RacingCar from './RacingCar.js';

class RacingGame {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
  }

  async setupGame() {
    const carNames = await InputView.inputGetCarNames();
    carNames.forEach((name) => this.addCar(name));

    this.tryCount = await InputView.inputgetTryCount();
  }

  addCar(name) {
    this.cars.push(new RacingCar(name));
  }

  play() {
    for (let i = 0; i < this.tryCount; i++) {
      this.cars.forEach((car) => car.move());
    }
  }
}

export default RacingGame;
