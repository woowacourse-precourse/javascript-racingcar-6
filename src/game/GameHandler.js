import { Console } from '@woowacourse/mission-utils';
import { getCarNames, getTryCount } from '../utils/Input.js';
import { initializeCarsPosition, runRace } from './CarGame.js';
import selectWinner from './Winner.js';
import { OUTPUT } from '../constants/MESSAGE.js';

const startGame = async () => {
  const carNames = await getCarNames();
  const tryCount = await getTryCount();
  const carsPosition = initializeCarsPosition(carNames);

  Console.print(OUTPUT.RACE_RESULT);
  await runRace(carNames, tryCount, carsPosition);
  selectWinner(carsPosition);
};

export default startGame;
