import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../utils/Constant.js';
import { Validation } from "../utils/Validation.js";

const InputView = {
  async inputCarsName() {
    const carInputData = await Console.readLineAsync(MESSAGE.INPUT_CARS_NAME);
    const carArr = carInputData.split(',');
    await Validation.carNameValidation(carArr);
    return carArr;
  },

  async inputTryNumber() {
    const tryNumber = await Console.readLineAsync(MESSAGE.INPUT_TRY_NUMBER);
    await Validation.tryNumberValidation(tryNumber);
    return tryNumber;
  },
}

export { InputView }