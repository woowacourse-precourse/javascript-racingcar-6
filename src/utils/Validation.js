import { ERROR } from "./Constant.js";

const Validation = {
  async carNameValidation(nameArr) {
    for (const name of nameArr) {
      if (!name.length) {
        throw new Error(ERROR.INPUT_NAME_LENGTH_ZERO)
      } else if (name.length > 5) {
        throw new Error(ERROR.INPUT_NAME_OVER_FIVE);
      }
    }
  },
}

export { Validation };