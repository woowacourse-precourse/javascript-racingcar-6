import { Console } from "@woowacourse/mission-utils";
import { checkRacingCarName, checkGameCount } from "../Util/Validation.js";
import { convertObjectListFreeze } from "../Util/ObjectFreeze.js"; 

async function inputRacingCarName(message) {
  const racingCarName = await Console.readLineAsync(message);
  checkRacingCarName(racingCarName);
  const racingCarList = getRacingCarList(racingCarName);
  // const racingCarList = racingCarName.split(",").map((carName) => ({ [carName]: 0 }));
  return convertObjectListFreeze(racingCarList);
}

 function getRacingCarList(racingCarName){
  return racingCarName
    .split(",")
    .map((carName) => (
      {
        carName : carName,
        moveCount : 0
      }
    ))
}

async function inputGameCount (message) {
  const gameCount = await Console.readLineAsync(message);
  checkGameCount(gameCount);
  return Number(gameCount);
}

export { inputRacingCarName, inputGameCount }