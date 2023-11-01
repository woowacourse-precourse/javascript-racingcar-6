import { Console } from '@woowacourse/mission-utils';
import Car from '../Car';
import { OUTPUT_MESSAGES, ERROR_MESSAGES } from '../utils/messages';

const WITH_SPACE_REGEX = /\s/;

class InputCars {
  async createCars() {
    const input = await Console.readLineAsync(
      OUTPUT_MESSAGES.input_car_names_message,
    );

    const carNames = input.split(',');

    this.#validateCarNames(carNames);

    return carNames.map(name => new Car(name));
  }

  #validateCarNames(carNames) {
    if (carNames.some(name => name.length === 0)) {
      throw new Error(ERROR_MESSAGES.car_name_empty);
    }

    if (new Set(carNames).size !== carNames.length) {
      throw new Error(ERROR_MESSAGES.car_name_duplicated);
    }

    if (carNames.some(name => name !== name.trim())) {
      throw new Error(ERROR_MESSAGES.car_name_has_trailing_spaces);
    }

    if (carNames.some(name => WITH_SPACE_REGEX.test(name))) {
      throw new Error(ERROR_MESSAGES.car_name_has_spaces);
    }
  }
}

export default InputCars;
