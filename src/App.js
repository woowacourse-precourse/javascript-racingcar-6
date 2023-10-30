import { readLineAsync, getValidInputNames, getValidInputNumber } from './utils';
import { MESSAGE } from './constants';
import CarRace from './CarRace';

const { INPUT_NAME, INPUT_NUMBER } = MESSAGE;

class App {
  carRace;

  async play() {
    try {
      const inputNames = await readLineAsync(INPUT_NAME);
      const carNames = getValidInputNames(inputNames);
      const inputNumber = await readLineAsync(INPUT_NUMBER);
      const count = getValidInputNumber(inputNumber);
      
      this.carRace = new CarRace(carNames, count);
    } catch (error) {
      throw new Error(error);
    }

    while (this.carRace.isPlaying()) {
      this.carRace.calculateResult();
      this.carRace.getResultMessage();
    }
  }
}

export default App;
