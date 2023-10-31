import { printMessage, readLineAsync, getValidInputNames, getValidInputNumber } from './utils';
import { MESSAGE } from './constants';
import CarRace from './domain/CarRace';

const { INPUT_NAME, INPUT_NUMBER, RESULT } = MESSAGE;

class App {
  #carRace;

  async play() {
    await this.initCarRaceGame();
    this.runCarRaceGame();
    this.showRaceWinner();
  }

  async initCarRaceGame() {
    try {
      const inputNames = await readLineAsync(INPUT_NAME);
      const carNames = getValidInputNames(inputNames);
      const inputNumber = await readLineAsync(INPUT_NUMBER);
      const round = getValidInputNumber(inputNumber);

      this.#carRace = new CarRace(carNames, round);
    } catch (error) {
      throw new Error(error);
    }
  }

  runCarRaceGame() {
    printMessage(RESULT);
    while (this.#carRace.isPlaying()) {
      this.#carRace.calculateResult();
      const result = this.#carRace.getResultMessage();
      printMessage(result);
    }
  }

  showRaceWinner() {
    const winner = this.#carRace.getWinnerMessage();
    printMessage(winner);
  }
}

export default App;
