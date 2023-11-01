import Race from './Race/index.js';
import { Input, Output } from './View/index.js';
import { MESSAGE, SYMBOLS } from './constants/index.js';

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
    const result = this.race.formatResult();
    Output.log(MESSAGE.result);
    Output.log(result);
    this.prize();
  }

  prize() {
    Output.log(`${MESSAGE.winner}${SYMBOLS.colon}${this.race.electWinner()}`);
  }
}

export default RacingCarGame;
