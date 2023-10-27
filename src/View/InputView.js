import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../utils/Constant.js';
import { Validation } from "../utils/Validation.js";

const InputView = {
  async InputCarsName() {
    const carInputData = await Console.readLineAsync(MESSAGE.INPUT_CARS_NAME);
    const carArr = carInputData.split(',');
    for (const carName of carArr) {
      await Validation.carNameValidation(carName);
    }
    return carArr;
  }
}

export { InputView }