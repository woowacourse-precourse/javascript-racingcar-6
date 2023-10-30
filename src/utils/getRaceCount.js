import { Console } from "@woowacourse/mission-utils";
import { checkRaceCount } from "../validators/raceValidator.js";

export const getRaceCount = async () => {
  Console.print("시도할 횟수는 몇 회인가요?");

  const input = await Console.readLineAsync("");
  const raceCount = parseInt(input);

  return checkRaceCount(raceCount);
};
