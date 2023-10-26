import { MissionUtils } from "@woowacourse/mission-utils";
import { randomMinNumber, randomMaxNumber, moveLimitNumber } from "../Util/Constants.js";

function generateRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(randomMinNumber, randomMaxNumber);
}

function decideMoveOrStop() {
  if (generateRandomNumber() >= moveLimitNumber) return true;
  return false;
}

function getTurnOverResult(racingCarList) {
  return racingCarList.map((carObject, idx) => {
    const carName = Object.keys(carObject)[0];
    if (decideMoveOrStop()) return { [carName] : carObject[carName] + 1 }
    return { [carName] : carObject[carName] }
  })
}

function getMaxMoveCount(racingCarList) {
  return racingCarList.reduce((maxMoveCount, carObject) => {
    const carName = Object.keys(carObject)[0];
    const carMoveCount = carObject[carName];
    return Math.max(maxMoveCount, carMoveCount);
  }, 0);
}

function getRacingCarWinner(racingCarList){
  const maxMoveCount = getMaxMoveCount(racingCarList);
  return racingCarList.filter((carObject) => {
    const carName = Object.keys(carObject)[0];
    const carMoveCount = carObject[carName];
    if (maxMoveCount === carMoveCount) return carName;
  }).map((carObject) => Object.keys(carObject)[0]);
}

export { getTurnOverResult, getRacingCarWinner };