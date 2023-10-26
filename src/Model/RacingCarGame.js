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

export default getTurnOverResult;