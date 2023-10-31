import { Console } from '@woowacourse/mission-utils';
import { INPUT_CARS_NAME, INPUT_COUNT } from '../constants/InputString.js';
import {
  ERROR_CARS_EMPTY,
  ERROR_CARS_LENGTH,
  ERROR_CARS_SPLIT,
  ERROR_CARS_DUPLICATED,
  ERROR_COUNT_EMPTY,
  ERROR_COUNT_NOT_NUMBER,
} from '../constants/ErrorString.js';

const InputView = {
  readCarsInput: async () => {
    const inputCars = await Console.readLineAsync(INPUT_CARS_NAME);

    InputView.validateCarsInput(inputCars);

    return inputCars;
  },

  readCountInput: async () => {
    const inputCount = await Console.readLineAsync(INPUT_COUNT);

    InputView.validateCountInput(inputCount);

    return inputCount;
  },

  validateCarsInput: inputCars => {
    const inputCarsArray = inputCars.split(',').map(inputCar => inputCar.trim());

    if (inputCars.length === 0) throw new Error(ERROR_CARS_EMPTY);
    inputCarsArray.forEach(inputCar => {
      if (inputCar.length > 5) throw new Error(ERROR_CARS_LENGTH);
    });
    if (inputCarsArray.includes('')) throw new Error(ERROR_CARS_SPLIT);
    if (inputCarsArray.length !== new Set(inputCarsArray).size)
      throw new Error(ERROR_CARS_DUPLICATED);
  },

  validateCountInput: inputCount => {
    if (!inputCount) throw new Error(ERROR_COUNT_EMPTY);
    if (!Number(inputCount)) throw new Error(ERROR_COUNT_NOT_NUMBER);
  },
};

export const { readCarsInput, readCountInput, validateCarsInput, validateCountInput } = InputView;
