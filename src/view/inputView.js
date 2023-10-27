import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants";
class InputView {
  getCarName() {
    let carName = Console.readLineAsync(MESSAGE.START_CAR_NAME);
  }

  getNumberOfAttempt() {}
}
export default InputView;
