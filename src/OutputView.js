import { MissionUtils } from '@woowacourse/mission-utils';
import { CAR_MOVEMENT_RESULT, GAME_MESSAGES } from './constants.js';

const OutputView = {
  printRoundResults(cars) {
    const roundResults = cars.map((car) => {
      let result = '';
      for (let i = 0; i < car.getPosition(); i++) {
        result += CAR_MOVEMENT_RESULT;
      }
      return `${car.getName()} : ${result}`;
    });

    MissionUtils.Console.print(roundResults.join('\n'));
    MissionUtils.Console.print('');
  },

  printFinalResult(winners) {
    MissionUtils.Console.print(GAME_MESSAGES.FINAL_WINNER + winners.join(', '));
  },
};

export default OutputView;
