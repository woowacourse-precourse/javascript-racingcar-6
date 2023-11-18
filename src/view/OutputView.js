import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, RULE } from '../constants/index.js';

const OutputView = {
  printMessage(message) {
    MissionUtils.Console.print(message);
  },
  printPlayMessage() {
    this.printMessage(MESSAGE.gameResult);
    this.printMessage('');
  },

  printPlayResult({ name, movement }) {
    this.printMessage(`${name} : ${movement.join('')}`);
  },

  printWinner(winnerArray) {
    const winnerSentence = winnerArray.join(`${RULE.delimiter}${' '}`);
    this.printMessage(`${MESSAGE.winner}${winnerSentence}`);
  },
};

export default OutputView;
