import { Console } from "@woowacourse/mission-utils";
import { checkRacingCarName } from "../Util/Validation.js";

async function InputRacingCarName(message) {
  const racingCarName = await Console.readLineAsync(message);
  checkRacingCarName(racingCarName);
  return racingCarName.split(",").map((carName) => { 
    return {[carName] : 0 }
  })
}

export {InputRacingCarName}