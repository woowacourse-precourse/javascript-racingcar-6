import { Console } from '@woowacourse/mission-utils';
import { RESULT_MESSAGE } from '../constants.js';

export class OutputService {
  printResultIntro() {
    Console.print(RESULT_MESSAGE.intro);
  }

  printCurrentResult(car, position, isLast) {
    Console.print(`${car} : ${position}`);
    if (isLast) {
      Console.print('');
    }
  }

  printFinalResult(result) {
    const max = Object.keys(result).reduce((acc, key) => {
      return Math.max(acc, result[key].length);
    }, 0);
    const winners = [];
    for (const [key, value] of Object.entries(result)) {
      if (value.length === max) {
        winners.push(key);
      }
    }
    Console.print(RESULT_MESSAGE.winners + `${winners.join(', ')}`);
  }
}
