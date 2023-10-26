import { ErrorMessage } from "../static/Static.js";
import { StaticString } from "../static/Static.js";

const InputValidator = {
  validateCarName(input) {
    if (input.length > StaticString.NAME_LENGTH_LIMIT)
      throw new Error(ErrorMessage.NAME_LENGTH_ERROR);
  },

  validateTimesNumber(input) {
    if (input.length !== 1) throw new Error(ErrorMessage.TIMES_LENGTH_ERROR);
    if (input.replace(StaticString.POSSIBLE_TIMES_NUMBER, "").length > 0)
      throw new Error(ErrorMessage.TIMES_NUMBER_ERROR);
  },
};

export default InputValidator;
