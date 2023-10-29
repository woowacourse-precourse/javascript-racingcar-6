import { MissionUtils } from '@woowacourse/mission-utils';
import RACING_CAR_GAME from '../Constant/Constant.js';

const PrintWinner = (racingCar) => {
  const RACING_CAR_NUMBER = [];

  [...racingCar].forEach((item) => {
    RACING_CAR_NUMBER.push(item[1].length);
  });

  const WINNER_NUMBER = Math.max(...RACING_CAR_NUMBER);

  const WINNER = [];

  [...racingCar].forEach((item) => {
    if (item[1].length === WINNER_NUMBER) WINNER.push(item[0]);
  });

  MissionUtils.Console.print(
    `${RACING_CAR_GAME.PRINT_WINNER}${WINNER.join(', ')}`
  );
};

export default PrintWinner;
