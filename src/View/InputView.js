/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { checkRacingCarName, checkGameCount } from '../Util/Validation.js';
import { convertObjectListFreeze } from '../Util/ObjectFreeze.js';

function getRacingCarList(racingCarName) {
  return racingCarName.split(',').map(paramCarName => ({
    carName: paramCarName,
    moveCount: 0,
  }));
}

async function inputRacingCarName(message) {
  const racingCarName = await Console.readLineAsync(message);
  checkRacingCarName(racingCarName);
  const initialRacingCarList = getRacingCarList(racingCarName);
  return convertObjectListFreeze(initialRacingCarList);
}

async function inputGameCount(message) {
  const gameCount = await Console.readLineAsync(message);
  checkGameCount(gameCount);
  return Number(gameCount);
}

export { inputRacingCarName, inputGameCount };
