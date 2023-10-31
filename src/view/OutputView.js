import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_RESULT_START } from '../constants/OutputString.js';
import driveAndStopCars from '../utils/driveAndStopCars.js';
import findWinners from '../utils/findWinners.js';

const OutputView = {
  printResultStartString: () => {
    Console.print(OUTPUT_RESULT_START);
  },

  printResulString: (cars, count) => {
    for (let i = 0; i < count; i += 1) {
      Console.print(cars.map(car => driveAndStopCars(car)).join('\n'));
      Console.print('\n');
    }
  },

  printWinnersString: cars => {
    const winners = findWinners(cars);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  },
};

export const { printResultStartString, printResulString, printWinnersString } = OutputView;
