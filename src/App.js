import { printMessage, readLineAsync, getValidInputNames, getValidInputNumber } from './utils';
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
      const round = getValidInputNumber(inputNumber);

      this.carRace = new CarRace(carNames, round);
    } catch (error) {
      throw new Error(error);
    }

    while (this.carRace.isPlaying()) {
      this.carRace.calculateResult();
      const result = this.carRace.getResultMessage();
      printMessage(result);
    }

    const winner = this.carRace.getWinnerMessage();
    printMessage(winner);
  }
}

export default App;
