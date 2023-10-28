import Race from './Race/index.js';
import { Input } from './View/index.js';

class RacingCarGame {
  constructor() {
    this.race = new Race();
  }

  async start() {
    await this.askCarNames();
  }

  async askCarNames() {
    const carNames = await Input.readCarNames();
    this.race.addCars(carNames);
    await this.askLapCount();
  }
}

export default RacingCarGame;
