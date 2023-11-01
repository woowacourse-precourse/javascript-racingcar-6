import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../utils/InputValidator";
import { PRINT_MESSAGE } from "../Constant/constant";

const Input = {
  async readInputRaceCarName(callback) {
    try {
      const input = await Console.readLineAsync(
        PRINT_MESSAGE.inputRaceCarNames
      );
      InputValidator.validateInputRaceCarName(input);
      callback(input);
    } catch (error) {
      throw new Error(error);
    }
  },

  async readInputRaceCarNumberOfAttempts(callback) {
    try {
      const input = await Console.readLineAsync(PRINT_MESSAGE.inputAttempts);
      InputValidator.validateInputRaceCarNumberOfAttempts(input);
      callback(input);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default Input;
