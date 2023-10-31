import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_RESULT_START } from '../constants/OutputString.js';
import driveAndStopCars from '../utils/driveAndStopCars.js';

const OutputView = {
  printResultStartString: () => {
    Console.print(OUTPUT_RESULT_START);
  },

  printResulString: (cars, count) => {
    for (let i = 0; i < count; i += 1) {
      cars.map(car => driveAndStopCars(car));
      Console.print('\n');
    }
  },
};

export const { printResultStartString, printResulString } = OutputView;
