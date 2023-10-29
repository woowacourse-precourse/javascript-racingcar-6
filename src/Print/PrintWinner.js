import { MissionUtils } from '@woowacourse/mission-utils';
import RACING_CAR_GAME from '../Constant/Constant.js';

const PrintWinner = (racingCar) => {
  const RACING_CAR_NUMBER = [];

  for (const CAR of racingCar) {
    RACING_CAR_NUMBER.push(CAR[1].length);
  }

  const WINNER_NUMBER = Math.max(...RACING_CAR_NUMBER);

  const WINNER = [];

  for (const CAR of racingCar) {
    if (CAR[1].length === WINNER_NUMBER) WINNER.push(CAR[0]);
  }

  MissionUtils.Console.print(
    `${RACING_CAR_GAME.PRINT_WINNER} : ${WINNER.join(', ')}`
  );
};

export default PrintWinner;
