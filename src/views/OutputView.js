import { Console } from '@woowacourse/mission-utils';

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

    this.printStaticMessage(output);
  },
};

export default OutputView;
