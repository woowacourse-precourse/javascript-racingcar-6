import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

function carMoveText(carName, carMoveArray) {
  for (let i = 0; i < carName.length; i++) {
    const randomNumber = Random.pickNumberInRange(0, 9);
    carMoveArray[i] += carMoveQualification(randomNumber);
    Console.print(carName[i] + " : " + carMoveArray[i]);
  }
}

function carMoveEmptyArray(carName) {
  let carMoveEmptyArray = [];
  for (let i = 0; i < carName.length; i++) {
    carMoveEmptyArray.push("");
  }
  return carMoveEmptyArray;
}

function carMoveQualification(randomNumber) {
  if (randomNumber >= 4) {
    return "-";
  } else {
    return "";
  }
}

export { carMoveText, carMoveEmptyArray };
