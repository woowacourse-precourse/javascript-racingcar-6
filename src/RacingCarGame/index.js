import Race from './Race/index.js';
import { Input, Output } from './View/index.js';
import { MESSAGE } from './constants/index.js';

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

  async askLapCount() {
    const lapCount = await Input.readLapCount();
    this.race.setLapCount(lapCount);
    this.compete();
  }

  compete() {
    const result = this.race.makeLapResult();
    Output.log(MESSAGE.result);
    Output.log(result);
    this.prize();
  }
}

export default RacingCarGame;
