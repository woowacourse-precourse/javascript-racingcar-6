import { Console } from '@woowacourse/mission-utils';
import IOManager from '../utils/IOManager.js';

class Game {
  constructor() {
    this.ioManager = new IOManager();
  }

  async playGame() {
    const carsName = await this.ioManager.getCarsName();
    Console.print('carsName: ', carsName);
  }
}

export default Game;
