import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

const RACE_CONSOLE_VIEW = {
  getUserInputCarName() {
    return Console.readLineAsync(MESSAGES.INPUT_CAR_NAME);
  },
  getUserInputMaxRound() {
    return Console.readLineAsync(MESSAGES.INPUT_TRY_NUMBER);
  },
  raceResult(raceResult) {
    let output = '';
    raceResult.forEach((round) => {
      const roundOutput = round.join('\n');
      output += `${roundOutput}\n\n`;
    });
    Console.print(output);
  },
};

export default RACE_CONSOLE_VIEW;
