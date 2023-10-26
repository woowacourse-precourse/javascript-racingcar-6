import { MissionUtils } from "@woowacourse/mission-utils";
import { randomMinNumber, randomMaxNumber, moveLimitNumber } from "../Util/Constants.js";
import { convertObjectListFreeze, convertListFreeze } from "../Util/ObjectFreeze.js";


function generateRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(randomMinNumber, randomMaxNumber);
}

function decideMoveOrStop() {
  if (generateRandomNumber() >= moveLimitNumber) return true;
  return false;
}

function getTurnOverResult(racingCarList) {
  const newRacingCarList = racingCarList.map((carObject) => {
    if(decideMoveOrStop()) return getCarNewObject(carObject.carName, carObject.moveCount + 1);
    return carObject;
  })
  return convertObjectListFreeze(newRacingCarList);
}

function getCarNewObject(carName, moveCount) {
  return {
    carName : carName,
    moveCount : moveCount
  }
}

function getMaxMoveCount(racingCarList) {
  return racingCarList.reduce((maxMoveCount, carObject) => {
    return Math.max(maxMoveCount, carObject.moveCount);
  }, 0);
}

function getRacingCarWinner(racingCarList){
  const maxMoveCount = getMaxMoveCount(racingCarList);
  const winnerRacingCarList = racingCarList
  .filter((carObject) => carObject.moveCount === maxMoveCount)
  .map((carObject) => carObject.carName);

  return convertListFreeze(winnerRacingCarList);
}

export { getTurnOverResult, getRacingCarWinner };