import Input from '../views/Input';
import Output from '../views/Output';
import Game from './Game';
import Validation from './Validation';

export default class GameController {
  #game;
  
  #tryNumber;

  async play() {
    await this.start();
    await this.game();
  }

  async start() {
    const carNames = await Input.readCarNames();
    this.#tryNumber = await Input.readTryNumber();
    const cars = carNames.split(',');
    const validation = new Validation(cars, this.#tryNumber);
    validation.isValid();
    this.#game = new Game(cars);
  }

  async game() {
    Output.printExecution();
    while (this.#tryNumber) {
      this.#tryNumber -= 1;
    }
  }
}
