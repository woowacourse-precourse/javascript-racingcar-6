import { Console } from "@woowacourse/mission-utils";
import { MESSAGES, ERROR_MESSAGES } from "../constants/Messages";

const InputCarNameView = () => {
  try {
    Console.readLineAsync(MESSAGES.INPUT_CARNAME);
  } catch {
    Console.print(ERROR_MESSAGES.CARNAME_ERROR);
  }
};

export default InputCarNameView;
