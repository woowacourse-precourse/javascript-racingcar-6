import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../model/Constant.js";
const InputView = {
  async inputRacingCars(callback) {
    await Console.readLineAsync(MESSAGE.RACE_CAR_NAME).then((input) => {
      callback(input);
    });
  },
  async inputRacingAttempt(callback) {
    await Console.readLineAsync(MESSAGE.RACE_ATTEMPT).then((input) => {
      callback(+input);
    });
  },
};

export default InputView;
