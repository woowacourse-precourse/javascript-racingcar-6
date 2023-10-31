import GAME_SCENARIO from './constant/GameScenario';
import { Console } from '@woowacourse/mission-utils';

export const gameSettingFromUserInput = async () => {
  const carName = await Console.readLineAsync(GAME_SCENARIO.ENTER_CAR_NAME);
  validate.carName(carName);

  const playCount = await Console.readLineAsync(GAME_SCENARIO.ENTER_PLAY_COUNT);
  validate.playCount(playCount);

  return { carName, playCount };
};

export const printGameWinner = cars => {
  Console.print(`${GAME_SCENARIO.WINNER} : ${race.winner(cars)}`);
};
