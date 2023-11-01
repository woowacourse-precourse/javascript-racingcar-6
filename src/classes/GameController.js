import Input from '../views/Input';
import Output from '../views/Output';
import Game from './Game';
import Validation from './Validation';

export default class GameController {
  #game;

  #tryNumber;

  async play() {
    await this.#start();
    await this.#executeGame();
    await this.#end();
  }

  async #start() {
    const carNames = await Input.readCarNames();
    this.#tryNumber = await Input.readTryNumber();
    const cars = carNames.split(',');
    const validation = new Validation(cars, this.#tryNumber);
    validation.isValid();
    this.#game = new Game(cars);
  }

  async #executeGame() {
    Output.printExecution();
    while (this.#tryNumber) {
      this.#game.forward();
      this.#tryNumber -= 1;
    }
  }

  async #end() {
    const cars = this.#game.getCars();
    let winners = [];
    let max = 0;
    cars.forEach((car) => {
      if (car.getForward() > max) {
        max = car.getForward();
        winners = [car.getName()];
      } else if (car.getForward() === max) {
        winners.push(car.getName());
      }
    });
    Output.printWinner(winners);
  }
}
