import { Console } from "@woowacourse/mission-utils";
import { isValidPlayerInput } from "../utils/Validation.js";

export async function playerInput() {
  const inputValue = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
  isValidPlayerInput(inputValue);
  return inputValue;
}
