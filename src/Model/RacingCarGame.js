/* eslint-disable import/extensions */
import { MissionUtils } from '@woowacourse/mission-utils';
import { randomMinNumber, randomMaxNumber, moveLimitNumber } from '../Util/Constants.js';
import {
  convertObjectListFreeze,
  convertListFreeze,
  getCarNewObject,
} from '../Util/ObjectFreeze.js';

function generateRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(randomMinNumber, randomMaxNumber);
}

function decideMoveOrStop() {
  return generateRandomNumber() >= moveLimitNumber;
}

function getTurnOverResult(racingCarList) {
  const turnOverRacingCarList = racingCarList.map(carObject =>
    decideMoveOrStop() ? getCarNewObject(carObject.carName, carObject.moveCount + 1) : carObject,
  );
  return convertObjectListFreeze(turnOverRacingCarList);
}

function getMaxMoveCount(racingCarList) {
  return racingCarList.reduce((maxMoveCount, carObject) => {
    return Math.max(maxMoveCount, carObject.moveCount);
  }, 0);
}

function getRacingCarWinner(racingCarList) {
  const maxMoveCount = getMaxMoveCount(racingCarList);
  const winnerRacingCarList = racingCarList
    .filter(carObject => carObject.moveCount === maxMoveCount)
    .map(carObject => carObject.carName);

  return convertListFreeze(winnerRacingCarList);
}

export { getTurnOverResult, getRacingCarWinner, getMaxMoveCount };
