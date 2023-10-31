import { GAME } from '../constants/constants';
import { carNameValidator } from '../validators/validator';
import Car from './Car';

class Game {
  #cars;
  #round;

  constructor(carNameInput, roundInput) {
    this.#setCars(carNameInput);
    this.#setRound(roundInput);
  }

  #setCars(carNameInput) {
    const carNames = carNameInput.split(GAME.splitDelimiter);
    carNameValidator(carNames);

    this.#cars = carNames.map(carName => new Car(carName));
  }

  #setRound(roundInput) {
    this.#round = roundInput;
  }

  getCars() {
    return this.#cars;
  }

  getRound() {
    return this.#round;
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map(car => car.getPosition()));

    const winners = this.#cars
      .filter(car => car.getPosition() === maxPosition)
      .map(car => car.getName());

    return winners;
  }

  moveCars() {
    this.#cars.forEach(car => car.moveForward());
  }
}

export default Game;
