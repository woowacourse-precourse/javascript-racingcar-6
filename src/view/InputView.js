import { readLineAsync } from "../utils/index.js";
import { MESSAGE } from "../utils/constants.js";
import InputValidate from "../core/InputValidate.js";

const { INPUT_CAR_NAMES, INPUT_TRY_COUNT } = MESSAGE;

class InputView {
  async inputData() {
    const carNames = await this.inputCarNames();
    const tryCount = await this.inputTryCount();

    return { carNames, tryCount };
  }

  async inputCarNames() {
    const input = await readLineAsync(INPUT_CAR_NAMES);

    const carNames = input.split(",").map((carName) => carName.trim());

    InputValidate.checkCarNames(carNames);

    return carNames;
  }

  async inputTryCount() {
    const input = await readLineAsync(INPUT_TRY_COUNT);

    const tryCount = Number(input);

    InputValidate.checkTryCount(tryCount);

    return tryCount;
  }
}

export default InputView;