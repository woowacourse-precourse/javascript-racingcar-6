import { readLineAsync } from "../utils/index.js";
import { MESSAGE } from "../utils/constants.js";
import InputValidate from "../core/InputValidate.js";

const { INPUT_CAR_NAMES, INPUT_TRY_COUNT } = MESSAGE;

class InputView {
  validate = new InputValidate();

  async inputCarNames() {
    const input = await readLineAsync(INPUT_CAR_NAMES);

    const carNames = input.split(",");

    this.validate.checkCarNames(carNames);

    return carNames;
  }

  async inputTryCount() {
    const input = await readLineAsync(INPUT_TRY_COUNT);

    const tryCount = Number(input);

    this.validate.checkTryCount(tryCount);

    return tryCount;
  }
}

export default InputView;
