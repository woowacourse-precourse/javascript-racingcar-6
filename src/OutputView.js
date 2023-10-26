import { MissionUtils } from '@woowacourse/mission-utils';
import { CAR_MOVEMENT_RESULT } from './constants';

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
};

export default OutputView;
