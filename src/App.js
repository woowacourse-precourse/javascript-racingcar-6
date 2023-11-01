import { Random, Console } from '@woowacourse/mission-utils';
import { ERROR, MESSAGES } from './Constants.js';

class Car {
  constructor(name) {
    this.name = name;
    this.movement = '';
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    this.movement += '-'.repeat(randomNumber >= 4 ? 1 : 0);
  }
}

class App {
  constructor() {
    this.cars = [];
    this.rounds = 0;
  }

  async #getInput() {
    const carNames = await Console.readLineAsync(MESSAGES.CARNAME);
    this.#validateCarNames(carNames);

    const roundsInput = await Console.readLineAsync(MESSAGES.TRIAL);
    this.#validateRounds(roundsInput);
  }

  #validateCarNames(input) {
    const carNames = input.split(',').map(name => name.trim());
    if (carNames.some(name => name.length > 5)) {
      throw new Error(ERROR.CAR_NAME);
    }
    this.cars = carNames.map(name => new Car(name));
  }

  #validateRounds(input) {
    const rounds = parseInt(input, 10);
    if (isNaN(rounds) || rounds <= 0) {
      throw new Error(ERROR.NUMBER);
    }
    this.rounds = rounds;
  }

  #playRacingCar() {
    Console.print(MESSAGES.RESULT)
    Array.from({ length: this.rounds }).forEach((_, round) => {
      this.cars.forEach(car => car.move());
      this.#printResult(round + 1);
    });
  }

  #printResult(round) {
    this.cars.forEach(car => {
      Console.print(`${car.name} : ${car.movement}`);
    });
    Console.print('\n');
  }

  #getWinners() {
    const maxMovement = Math.max(...this.cars.map(car => car.movement.length));
    const winners = this.cars.filter(car => car.movement.length === maxMovement);
    return winners.map(car => car.name).join(', ');
  }

  #printWinners() {
    const winners = this.#getWinners();
    Console.print(`${MESSAGES.WINNER} ${winners}`);
  }

  async play() {
    await this.#getInput();
    this.#playRacingCar();
    this.#printWinners();
  }
}

export default App;
