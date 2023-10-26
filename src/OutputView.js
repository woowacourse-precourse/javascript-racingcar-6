import { MissionUtils } from '@woowacourse/mission-utils';
import { CAR_MOVEMENT_RESULT, GAME_MESSAGES } from './constants.js';

const OutputView = {
  printRoundResults(cars) {
    const roundResults = cars.map((car) => {
      let result = '';
      for (let i = 0; i < car.position; i++) {
        result += CAR_MOVEMENT_RESULT;
      }
      return `${car.name} : ${result}`;
    });

    MissionUtils.Console.print(roundResults.join('\n'));
    MissionUtils.Console.print('');
  },

  printFinalResult(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    MissionUtils.Console.print(GAME_MESSAGES.FINAL_WINNER + winners.join(', '));
  },
};

export default OutputView;
