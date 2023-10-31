import { Console } from '@woowacourse/mission-utils';
import { INPUT_CARS_NAME, INPUT_COUNT } from '../constants/InputString.js';
import { ERROR_CARS_LENGTH } from '../constants/ErrorString.js';

const InputView = {
  readCarsInput: async () => {
    const inputCars = await Console.readLineAsync(INPUT_CARS_NAME);

    validateCarsInput(inputCars);

    return inputCars;
  },

  readCountInput: async () => {
    const inputCount = await Console.readLineAsync(INPUT_COUNT);

    return inputCount;
  },

  validateCarsInput: inputCars => {
    const inputCarsArray = inputCars.split(',').map(inputCar => inputCar.trim());

    inputCarsArray.map(inputCar => {
      if (inputCar.length > 5) throw new Error(ERROR_CARS_LENGTH);
    });
  },
};

export const { readCarsInput, readCountInput, validateCarsInput } = InputView;
