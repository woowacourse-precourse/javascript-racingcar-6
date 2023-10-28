import { readLineAsync, isValidInputNames, getValidInputNumber } from './utils';
import { MESSAGE } from './constants';

const { INPUT_NAME, INPUT_NUMBER } = MESSAGE;

class App {
  async play() {
    try {
      const inputNames = await readLineAsync(INPUT_NAME);
      isValidInputNames(inputNames);
      const inputNumber = await readLineAsync(INPUT_NUMBER);
      getValidInputNumber(inputNumber);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
