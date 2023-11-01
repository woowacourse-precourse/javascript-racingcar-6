import { Console } from "@woowacourse/mission-utils";
import Exception from "./Exception";
import { MESSAGE } from "./Message";

const exception = new Exception;
class GetInput {
  carName = [];

  async getCarNameInput() {
    try {
      const USER_INPUT = await Console.readLineAsync(MESSAGE.GET_CAR_NAME_MESSAGE);
      this.carName = exception.carNameInputException(USER_INPUT);
      return this.carName;
    }catch(error) {
      throw new Error(error.message);
    }
  }

  async getNumberInput() {
    try {
      const USER_NUMBER_INPUT = await Console.readLineAsync(MESSAGE.GET_NUMBER_NAME_MESSAGE);
      Console.print("");
      exception.numberInputException(USER_NUMBER_INPUT);
      return USER_NUMBER_INPUT;
    }catch(error) {
      throw new Error(error.message);
    }
  }
}

export default GetInput;