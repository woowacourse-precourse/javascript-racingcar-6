import { Console } from '@woowacourse/mission-utils';
import { INPUT_CARS_NAME } from '../constants/InputString.js';

const InputView = {
  readCarsInput: async () => {
    const inputCars = await Console.readLineAsync(INPUT_CARS_NAME);

    return inputCars;
  },
};

export const { readCarsInput } = InputView;
