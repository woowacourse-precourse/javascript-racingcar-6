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

  printQuarterResult(raceCarsList) {
    raceCarsList.forEach((car) => {
      const carName = car.getCarName();
      const positionMark = '-'.repeat(car.getCarPosition());
      this.#printMessage(`${carName} : ${positionMark}`);
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
