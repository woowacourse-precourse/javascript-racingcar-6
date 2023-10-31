import { ERRORS } from "../utils/constants.js";

class CommonError {
  static checkEmpty(inputList) {
    if (inputList.trim() === "") {
      throw new Error(`${ERRORS.ERROR} ${ERRORS.EMPTY_INPUT_ERROR}`);
    }
  }
}

export default CommonError;
