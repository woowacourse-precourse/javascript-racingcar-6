import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../utils/InputValidator";

const Input = {
  async readInputRaceCarName(callback) {
    try {
      const input = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      InputValidator.validateInputRaceCarName(input);
      callback(input);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default Input;
