import { Console } from "@woowacourse/mission-utils";
import { inputMessage } from "../messages/inputMessage.js";
import { checkRaceCount } from "../validators/raceValidator.js";

export const getRaceCount = async () => {
  Console.print(inputMessage.RACE_MESSAGE);

  const input = await Console.readLineAsync("");
  const raceCount = parseInt(input);

  return checkRaceCount(raceCount);
};
