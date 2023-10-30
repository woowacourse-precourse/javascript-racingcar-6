import { Console } from '@woowacourse/mission-utils';
import { InGameMessages } from './Constants.js';
import Input from './Input.js';
import CarSet from './CarSet.js';

class App {
  #carSet;

  #attemptLeft;

  async play() {
    await this.getInputs();
    this.runGame();
    this.printWinner();
  }

  async getInputs() {
    const carString = await Input.readCarString();
    this.#carSet = new CarSet(carString);
    this.#attemptLeft = await Input.readAttemptString();
  }

  runGame() {
    Console.print(InGameMessages.PRINT_RESULT);
    while (this.#attemptLeft > 0) {
      this.#attemptLeft -= 1;
      this.#carSet.race();
    }
  }

  printWinner() {
    const winners = this.#carSet.findWinners().join(', ');
    Console.print(`${InGameMessages.PRINT_WINNER}${winners}`);
  }
}

export default App;
