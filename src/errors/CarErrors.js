import { ERRORS } from "../utils/constants.js";
import { GAME_RULE } from "../utils/constants.js";

class CarErrors {
  static checkInputLength(inputList) {
    inputList.forEach((element) => {
      if (element.length > GAME_RULE.CAR_NAME_LENGTH) {
        throw new Error(`${ERRORS.ERROR} ${ERRORS.NAME_LENGTH_EXCEEDED_ERROR}`);
      }
    });
  }
}

export default CarErrors;
