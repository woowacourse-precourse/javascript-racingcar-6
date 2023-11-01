import { Console } from "@woowacourse/mission-utils";
import InputValidate from "../utils/InputValidate";
import { GUIDE_MESSAGE } from "../Constant/Constant";

class InputView {
  static async readUserCars(callback) {
    await Console.readLineAsync(GUIDE_MESSAGE.READ_CARS).then((input) => {
      InputValidate.readCarsValidate(input);
      callback(input);
    });
  }
  static async readUserTrynum(callback) {
    await Console.readLineAsync(GUIDE_MESSAGE.READ_TRYNUM).then((input) => {
      InputValidate.readTrynumValidate(input);
      callback(input);
    });
  }
}
export default InputView;
