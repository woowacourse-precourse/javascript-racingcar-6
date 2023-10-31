import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages';

const OutputView = {
  printStaticMessage(message) {
    return Console.print(message);
  },

  printCurrentResult(currentResult) {
    let output = '';

    currentResult.forEach(({ name, progress }) => {
      const progressString = '-'.repeat(progress);
      output += `${name} : ${progressString}\n`;
    });

    return this.printStaticMessage(output);
  },

  printFinalWinner(winners) {
    let message = '';
    message += `${MESSAGE.finalWinner}${winners.join(', ')}`;
    return this.printStaticMessage(message);
  },
};

export default OutputView;
