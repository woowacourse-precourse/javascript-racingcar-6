import { Console } from '@woowacourse/mission-utils';
import Race from './Race.js';
import IOManager from '../utils/IOManager.js';

class Game {
  constructor() {
    this.ioManager = new IOManager();
    this.race = new Race();
  }

  async startGame() {
    const carsName = await this.ioManager.getCarsName();
    const raceCount = await this.ioManager.getRaceCount();

    Console.print('실행 결과');
    return this.race.playRace(carsName, raceCount);
  }
}

export default Game;
