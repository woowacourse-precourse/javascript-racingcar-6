import { MissionUtils } from '@woowacourse/mission-utils'
import Messages from './Messages.js';
import Car from './Car.js';

class App {
  async play() {
    const players = await this.getCarsNames();
    const gameTimes = await this.getGameTimes();

    /**
     * check: parsing worked
    *players.forEach(player => {
    *  MissionUtils.Console.print(player.name);
    *});
    */
  }

  async getCarsNames() {
    const names = (await MissionUtils.Console.readLineAsync(Messages.INPUT_CARS)).split(',');
    this.checkNames(names);
    const cars = names.map(name => new Car(name));

    return cars;
  }

  async getGameTimes() {
    const gameTimes = await MissionUtils.Console.readLineAsync(Messages.INPUT_CNTS);
    this.checkGameTimes(gameTimes);

    return gameTimes;
  }

  checkNames(names) {
    names.forEach(name => {
      if (!name || name.length > 5) {
        throw new Error(Messages.ERROR_INPUT_CARS);
      }
    });
  }

  checkGameTimes(gameTimes) {
    if (gameTimes < 0) throw new Error(Messages.ERROR_CNTS_POSITIVE);
    // todo: check difference of isNaN and isInteger
    if (Number.isNaN(gameTimes)) throw new Error(Messages.ERROR_CNTS_NAN);
  }
}

export default App;
