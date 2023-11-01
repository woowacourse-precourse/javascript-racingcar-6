import { Console } from '@woowacourse/mission-utils';
import Car from './models/Car.js';
import { getUserInput } from './utils/input.js';
import { validateCarNames, validateRounds } from './utils/validation.js';

class App {
  constructor() {
    this.cars = [];
    this.rounds = 0;
  }

  async getInput() {
    const { carNames, rounds } = await getUserInput();
    const validCarNames = validateCarNames(carNames);
    this.cars = validCarNames.map((name) => new Car(name));
    this.rounds = validateRounds(rounds);
  }

  async runRaces() {
    for (let i = 0; i < this.rounds; i++) {
      this.playRound();
      this.printCarPositions();
    }
  }

  async play() {
    try {
      await this.getInput();
      Console.print('실행 결과');
      await this.runRaces();
      this.printResult();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  playRound() {
    this.cars.forEach((car) => car.move());
  }

  printCarPositions() {
    this.cars.forEach((car) => car.printPosition());
    Console.print('');
  }

  printResult() {
    const winners = this.getWinners();
    Console.print(`우승자: ${winners.join(', ')}`);
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }
}

export default App;
