import { ERROR } from "./Constant.js";
import { NUMBER } from "./Constant.js";

const Validation = {
  async carNameValidation(nameArr) {
    for (const name of nameArr) {
      if (!name.length) {
        throw new Error(ERROR.INPUT_NAME_LENGTH_ZERO)
      } else if (name.includes(" ")) {
        throw new Error(ERROR.INPUT_SPACE_IN_NAME);
      } else if (name.length > NUMBER.MAX_NAME_LENGTH) {
        throw new Error(ERROR.INPUT_NAME_LENGTH_OVER_FIVE);
      } 
    }
  },

  async tryNumberValidation(number) {
    if (!number.length) {
      throw new Error(ERROR.INPUT_TRY_NUMBER_EMPTY);
    } else if (isNaN(number)) {
      throw new Error(ERROR.INPUT_STRING_IN_TRY_NUMBER);
    }
  },
}

export { Validation };