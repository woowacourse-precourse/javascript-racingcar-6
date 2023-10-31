import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/Messages";

const InputCarNameView = () => {
  try {
    Console.readLineAsync(MESSAGES.INPUT_CARNAME);
  } catch (err) {
    err.Console.print("[ERROR]");
  }
};

export default InputCarNameView;
