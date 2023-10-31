import { Console } from '@woowacourse/mission-utils';
import { getCarNames, getTryCount } from '../utils/Input.js';
import { initializeCarsPosition, runRace } from './CarGame.js';
import selectWinner from './Winner.js';

const startGame = async () => {
  const carNames = await getCarNames();
  const tryCount = await getTryCount();
  const carsPosition = initializeCarsPosition(carNames);

  Console.print('실행결과');
  await runRace(carNames, tryCount, carsPosition);
  selectWinner(carsPosition);
};

export default startGame;
