import winnerCalculate from '../calulate/winner.js';
import Race from './Race.js';

class Game {
  constructor() {
    this.race = new Race();
  }

  async run() {
    await this.race.arrayToObjects();
    await this.race.repeatNTimes();
    winnerCalculate(this.race.raceCars);
  }
}

export default Game;
