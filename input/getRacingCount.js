import { Console } from "@woowacourse/mission-utils";
import validateRacingCount from "../validator/validateRacingCount.js";

/**
 * 사용자에게 경주횟수를 입력받아 반환한다.
 * 
 * @param {string} userInput
 * @returns {number}
 */

export default async function getRacingCount() {
  const userInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  const racingCount = String(userInput);

  validateRacingCount(racingCount);

  return Number(racingCount);
}

// getRacingCount();
