import Util from './Util.js';
import Input from './Input.js';
import Output from './Output.js';

class RacingGame {
  constructor() {
    this.joinList = [];
    this.repeatNumber = '';
  }

  async start() {
    this.joinList = await Input.getJoinList();
    this.repeatNumber = await Input.getRepeatNumber();
    this.gameStart();
  }

  gameStart() {
    for (let i = 0; i < this.repeatNumber; i += 1) {
      this.printEachProgress();
    }

    this.printWinner();
  }

  printWinner() {
    const winner = this.getWinner(this.joinList).join(', ');
    Output.printWinner(winner);
  }

  getWinner() {
    const maxLength = Util.getMaxLength(this.joinList);
    const winnerList = Util.getWinnerList(this.joinList, maxLength);

    return winnerList.map((winner) => winner.name);
  }

  printEachProgress() {
    this.joinList.forEach((car) => {
      car.moveOrNot();

      Output.printProgress(car.name, car.progress);
    });

    Output.printEmptyLine();
  }
}

export default RacingGame;
