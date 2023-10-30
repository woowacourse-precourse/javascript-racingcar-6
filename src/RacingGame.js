import Util from './Util.js';
import Input from './Input.js';
import Output from './Output.js';
import { MESSAGE } from './constant.js';

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
    Array.from({ length: this.repeatNumber }).forEach(() => this.printEachProgress());

    this.printWinner();
  }

  printEachProgress() {
    this.joinList.forEach((participant) => {
      participant.moveOrNot();

      Output.printProgress(participant.name, participant.progress);
    });

    Output.printEmptyLine();
  }

  printWinner() {
    const winner = this.getWinner(this.joinList).join(MESSAGE.winnerDivider);
    Output.printWinner(winner);
  }

  getWinner() {
    const maxLength = Util.getMaxLength(this.joinList);
    const winnerList = Util.getWinnerList(this.joinList, maxLength);

    return winnerList.map((winner) => winner.name);
  }
}

export default RacingGame;
