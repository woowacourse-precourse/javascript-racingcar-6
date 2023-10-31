import { Console } from '@woowacourse/mission-utils';
import { INPUT_CARS_NAME, INPUT_COUNT } from '../constants/InputString.js';

const InputView = {
  readCarsInput: async () => {
    const inputCars = await Console.readLineAsync(INPUT_CARS_NAME);

    return inputCars;
  },

  readCountInput: async () => {
    const inputCount = await Console.readLineAsync(INPUT_COUNT);

    return inputCount;
  },
};

export const { readCarsInput, readCountInput } = InputView;
