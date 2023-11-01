import { Console } from "@woowacourse/mission-utils";
import validateRacingCount from "../validator/validateRacingCount.js";
import { GUIDE_MESSAGES } from "../constants/constants.js";


/**
 * 사용자에게 경주횟수를 입력받아 반환한다.
 * 
 * @param {string} userInput
 * @returns {number}
 */

export default async function getRacingCount() {
  const userInput = await Console.readLineAsync(GUIDE_MESSAGES.racingCountGuide + '\n');
  const racingCount = String(userInput);

  validateRacingCount(racingCount);

  return Number(racingCount);
}

// getRacingCount();
