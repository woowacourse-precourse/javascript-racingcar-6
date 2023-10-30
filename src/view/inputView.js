import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants";
class InputView {
  inputCarName() {
    let carName = Console.readLineAsync(MESSAGE.START_CAR_NAME);
  }

  inputNumberOfAttempt() {}
}
export default InputView;
