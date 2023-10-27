import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../utils/Constant.js';
import { Validation } from "../utils/Validation.js";

const InputView = {
  async InputCarsName() {
    const carInputData = await Console.readLineAsync(MESSAGE.INPUT_CARS_NAME);
    const carArr = carInputData.split(',');
    await Validation.carNameValidation(carArr);
    return carArr;
  },
}

export { InputView }