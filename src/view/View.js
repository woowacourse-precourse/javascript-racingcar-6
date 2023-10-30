import { Console } from "@woowacourse/mission-utils";
import { isValidPlayerInput } from "../utils/Validation.js";
import { MESSAGE_NOTIFICATION } from "../constants/Message.js";

export async function playerInput() {
  const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.playerInput);
  isValidPlayerInput(inputValue);
  return inputValue;
}
