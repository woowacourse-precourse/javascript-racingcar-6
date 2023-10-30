import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../util/constants.js';

class Output {
  racingStartMessage() {
    Console.print(MESSAGE.racingResult);
  }

  eachResult(carNames, winnerList) {
    for (let i = 0; i < carNames.length; i++) {
      Console.print(`${carNames[i]} : ${winnerList[i]}`);
    }
    Console.print(``);
  }

  finalResult(finalWinner) {
    Console.print(`${MESSAGE.finalMessage}${finalWinner.join(`, `)}`);
  }
}

export default Output;
