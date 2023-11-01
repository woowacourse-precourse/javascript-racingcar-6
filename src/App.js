import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import Input from './Input.js';
import CarSet from './CarSet.js';
class App {
  #carSet;
  #round;

  async play() {
    await this.InputUser();
    this.race();
    this.printWinner();
  }

  async InputUser() {
    const carsArray = await Input.inputCars();
    this.#carSet = new CarSet(carsArray);
    this.#round = await Input.inputRound();
  }

  race() {
    Console.print(MESSAGES.printResult);
    while (this.#round > 0) {
      this.#round -= 1;
      this.#carSet.race();
    }
  }

  printWinner() {
    const winners = this.#carSet.findWinners().join(',');
    Console.print(`${MESSAGES.printWinner}${winners}`);
  }
}
export default App;
