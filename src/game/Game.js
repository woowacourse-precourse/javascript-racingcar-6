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

    this.ioManager.printExecuteMessage();
    return this.race.executeRace(carsName, raceCount);
  }
}

export default Game;
