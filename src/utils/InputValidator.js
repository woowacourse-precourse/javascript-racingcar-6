import { ErrorMessage } from "../static/Static.js";
import { StaticNumber } from "../static/Static.js";

const InputValidator = {
  // input 값은 배열의 형태
  validateCarName(input) {
    if (input.some((name) => name.length > StaticNumber.NAME_LENGTH_LIMIT))
      throw new Error(ErrorMessage.NAME_LENGTH_ERROR);
    if (input.length !== new Set(input).size)
      throw new Error(ErrorMessage.NAME_DUPLICATE_ERROR);
  },

  validateTimesNumber(input) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorMessage.TIMES_NUMBER_ERROR);
    if (input === Number(0)) throw new Error(ErrorMessage.TIMES_ZERO_ERROR);
  },
};

export default InputValidator;
