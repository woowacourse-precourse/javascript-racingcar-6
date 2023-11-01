import Garage from './Garage.js';
import { print, readLineAsync } from '../utility/console.js';
import { MESSAGE, ERROR_MESSAGE } from '../constant/message.js';

class RacingCarGame {
  #gameCount = 0;

  #nameList = [];
  
  #nameListString = '';

  async #getNameString() {
    this.#nameListString = await readLineAsync(MESSAGE.nameInputGuide);
  }

  async #getGameCount() {
    this.#gameCount = await readLineAsync(MESSAGE.countInputGuide);
  }

  async gameStart() {
    await this.#getNameString();

    await this.#getGameCount();
  }
}

export default RacingCarGame;