import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from './Message';

class Output {
  printMessage;

  constructor() {
    this.printMessage = (message) => {
      MissionUtils.Console.print(message);
    };
  }

  printPlayMessage() {
    this.printMessage(MESSAGE.gameResult);
  }

  printInputRoundMessage() {
    this.printMessage(MESSAGE.inputRound);
  }

  printTotalRound(round) {
    this.printMessage(round);
  }

  printPlayResult({ name, movement }) {
    this.printMessage(`${name} : ${movement.join('')}`);
  }
}

export default Output;
