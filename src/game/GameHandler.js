import { Console } from '@woowacourse/mission-utils';
import { getCarNames, getTryCount } from '../utils/Input.js';
import { initializeCarsPosition, runRace } from './CarGame.js';
import selectWinner from './Winner.js';

const gameStart = async () => {
  const carNames = getCarNames();
  const tryCount = getTryCount();
  const carsPosition = initializeCarsPosition(carNames);

  Console.log('실행결과');
  await runRace(carNames, tryCount, carsPosition);
  selectWinner(carsPosition);
};

export default gameStart;
