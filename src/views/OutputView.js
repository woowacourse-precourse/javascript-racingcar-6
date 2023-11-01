import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGES from '../constants/GameMessage.js';

class OutputView {
  #print;

  constructor(print = Console.print) {
    this.#print = print;
  }

  #printMessage(message) {
    this.#print(message);
  }

  printQuarterResult(raceCarInfos) {
    raceCarInfos.forEach((carInfo) => {
      const positionMark = GAME_MESSAGES.positionMark.repeat(carInfo.position);
      this.#printMessage(`${carInfo.name} : ${positionMark}`);
    });
    this.#printMessage('');
  }

  printRaceWinners(winnerList) {
    this.#printMessage(`${GAME_MESSAGES.raceWinner} : ${winnerList}`);
  }

  printRaceResultMessage() {
    this.#printMessage(`\n${GAME_MESSAGES.raceResult}`);
  }
}

export default OutputView;
