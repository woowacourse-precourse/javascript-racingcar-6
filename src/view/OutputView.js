import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_RESULT_START } from '../constants/OutputString.js';

const OutputView = {
  printResultStartString: () => {
    Console.print(OUTPUT_RESULT_START);
  },
};

export const { printResultStartString } = OutputView;
