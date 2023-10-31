import Input from '../views/Input';
import Game from './Game';
import Validation from './Validation';

export default class GameController {
  #game;

  async start() {
    const carNames = await Input.readCarNames();
    const tryNumber = await Input.readTryNumber();
    const cars = carNames.split(',');
    const validation = new Validation(cars, tryNumber);
    validation.isValid();
    this.#game = new Game(cars, tryNumber);
  }
}
