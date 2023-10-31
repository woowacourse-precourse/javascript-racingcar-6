import { Console } from "@woowacourse/mission-utils";
import { MESSAGES, ERROR_MESSAGES } from "../constants/Messages";

const InputTrialNumberView = () => {
  try {
    Console.readLineAsync(MESSAGES.INPUT_TRIAL);
  } catch {
    Console.print(ERROR_MESSAGES.NUMBER_ERROR);
  }
};

export default InputTrialNumberView;
