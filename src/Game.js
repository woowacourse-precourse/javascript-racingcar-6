import Car from './Car.js';
import Input from './utils/Input.js';

class Game {
  constructor() {
    this.cars = [];
    this.trialCount = 0;
    this.winningPosition = 0;
    this.input = new Input();
  }

  async init() {
    const names = await this.input.getCarNames();
    this.cars = names.map((name) => new Car(name));

    this.trialCount = await this.input.getTrialCount();
  }
}

export default Game;
