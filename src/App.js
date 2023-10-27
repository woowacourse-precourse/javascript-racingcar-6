import { MissionUtils } from '@woowacourse/mission-utils';
import Messages from './Messages.js';
import Car from './Car.js';

class App {
  async play() {
    const players = await this.getCarsNames();
    const gameTimes = await this.getGameTimes();

    this.displayResult(players, gameTimes);
    this.displayWinner(players);
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
      if (name.length > 5) {
        throw new Error(Messages.ERROR_CARS);
      }
    });
  }

  checkGameTimes(gameTimes) {
    if (!gameTimes) throw new Error(Messages.ERROR_CNTS_EMPTY);

    if (!Number.isInteger(Number(gameTimes))) throw new Error(Messages.ERROR_CNTS_TYPE);

    const intTimes = parseInt(gameTimes);

    if(intTimes <= 0) throw new Error(Messages.ERROR_CNTS_RANGE);

    if(Number.isNaN(intTimes)) throw new Error(Messages.ERROR_CNTS_NAN);
  }

  displayResult(players, gameTimes) {
    MissionUtils.Console.print(Messages.MSG_RESULT);
    for (let i = 0; i < gameTimes; i++) {
      players.forEach(player => {
        player.moveOrNot();
      });
      MissionUtils.Console.print('\n');
    }
  }

  displayWinner(players) {
    const winner = this.getWinner(players);
    MissionUtils.Console.print(Messages.MSG_WINNER + winner);
  }

  getWinner(players) {
    const maxDistance = Math.max(...players.map(player => player.moved_distance));
    const winners = players.filter(player => player.moved_distance === maxDistance);
    const winnerNames = winners.map(winner => winner.name);

    return winnerNames.join(', ');
  }
}

export default App;
