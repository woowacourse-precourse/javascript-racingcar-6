import { readLineAsync, isValidInputNames } from './utils';
import { MESSAGE } from './constants';

const { INPUT_NAME } = MESSAGE;

class App {
  async play() {
    try {
      const inputNames = await readLineAsync(INPUT_NAME);
      isValidInputNames(inputNames);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
