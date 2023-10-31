import { ERROR_MESSAGE } from "../constant/message.js";
import { RegExp } from "../constant/number.js";
import consoleControl from "./consoleControl.js";

export default async function getTryNumberAndCheck() {
  const userInput = await consoleControl.readTryCount();

  inputValidation(userInput);
  return userInput;
}

function inputValidation(input) {
  if (!RegExp.test(input)) {
    throw new Error(ERROR_MESSAGE.NUMBER);
  }
}
