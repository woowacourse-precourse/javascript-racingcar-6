import { Console } from "@woowacourse/mission-utils";
import { checkRacingCarName } from "../Util/Validation.js";

async function inputRacingCarName(message) {
  const racingCarName = await Console.readLineAsync(message);
  checkRacingCarName(racingCarName);
  return racingCarName.split(",").map((carName) => { 
    return {[carName] : 0 }
  })
}

async function inputGameCount (message) {
  const gameCount = await Console.readLineAsync(message);

}

export { inputRacingCarName, inputGameCount }