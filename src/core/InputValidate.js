import { ERROR_MESSAGE, GAME_SETTING } from "../utils/constants.js";
import { throwError } from "../utils/index.js";

const { MIN_CAR_NAME_LENGTH, MAX_CAR_NAME_LENGTH, MIN_TRY_COUNT } = GAME_SETTING;
const { DUPLICATED_CAR_NAME, INVALID_CAR_NAME, INVALID_TRY_COUNT, EMPTY_INPUT } = ERROR_MESSAGE;

class InputValidate {
  static checkCarNames(carNames) {
    throwError(EMPTY_INPUT, carNames.length === 0);

    for (let i = 0; i < carNames.length; i++) {
      const carName = carNames[i];

      throwError(INVALID_CAR_NAME, carName.length > MAX_CAR_NAME_LENGTH);
      throwError(INVALID_CAR_NAME, carName.length < MIN_CAR_NAME_LENGTH);
    }

    throwError(DUPLICATED_CAR_NAME, new Set(carNames).size !== carNames.length);
  }

  static checkTryCount(tryCount) {
    throwError(INVALID_TRY_COUNT, isNaN(tryCount));
    throwError(INVALID_TRY_COUNT, tryCount < MIN_TRY_COUNT);
  }
}

export default InputValidate;