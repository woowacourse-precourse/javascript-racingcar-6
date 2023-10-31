import { Console } from "@woowacourse/mission-utils";
import { EXEPTION } from "./Exception";
import { MESSAGE } from "./Message";

class GetInput {
  carName = [];

  async getCarNameInput() {
    try {
      const USER_INPUT = await Console.readLineAsync(MESSAGE.GET_CAR_NAME_MESSAGE);
      const USER_INPUT_SPLIT = USER_INPUT.split(',');
      if(USER_INPUT_SPLIT == '' || USER_INPUT_SPLIT[USER_INPUT_SPLIT.length-1] == '') {
          throw new Error(EXEPTION.CAR_NAME_COUNT_ERROR);
      }
      else if(USER_INPUT_SPLIT.some(name => name.length >= 5)) {
          throw new Error(EXEPTION.CAR_NAME_LENGTH_ERROR);
      }
      else if(USER_INPUT_SPLIT.length != [...new Set(USER_INPUT_SPLIT)].length) {
          throw new Error(EXEPTION.CAR_NAME_LENGTH_ERROR);
      }
      else {
          this.carName = USER_INPUT_SPLIT;
      }
      return this.carName;
    }catch(error) {
      throw new Error(error.message);
    }
  }

  async getNumberInput() {
    try {
      const USER_NUMBER_INPUT = await Console.readLineAsync(MESSAGE.GET_NUMBER_NAME_MESSAGE);
      Console.print("");
      if(!Number(USER_NUMBER_INPUT)) {
        throw new Error(EXEPTION.INVALID_TYPE_TRY_ERROR);
      }
      else if(USER_NUMBER_INPUT == 0) {
        throw new Error(EXEPTION.TRY_COUNT_ERROR);
      }
      return USER_NUMBER_INPUT;
    }catch(error) {
      throw new Error(error.message);
    }
  }
}

export default GetInput;