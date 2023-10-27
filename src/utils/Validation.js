import { ERROR } from "./Constant.js";

const Validation = {
  async carNameValidation(name) {
    if (!name.length) {
      throw new Error(ERROR.INPUT_NAME_LENGTH_ZERO)
    } else if (!name.length || name.length > 5) {
      throw new Error(ERROR.INPUT_NAME_OVER_FIVE);
    }
  },
}

export { Validation };