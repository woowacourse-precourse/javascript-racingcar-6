import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Inputs from '../utils/Inputs.js';
import ReturnWinner from './ReturnWinner.js';

class CarRacingGame {
  #cars;

  constructor() {
    this.#cars = [];
    this.inputs = new Inputs();
  }

  async gameStart() {
    const carNames = await this.inputs.returnCarNames();
    const tryCount = await this.inputs.getTryCount();
    this.initializeCars(carNames);

    Console.print('\n실행 결과');

    for (let tryNumber = 0; tryNumber < tryCount; tryNumber += 1) {
      this.runRaceRound();
    }

    this.printWinners();
  }

  initializeCars(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  runRaceRound() {
    this.#cars.forEach((car) => {
      car.move();
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
    Console.print('');
  }

  printWinners() {
    const winners = ReturnWinner.findWinners(this.#cars);
    ReturnWinner.printWinners(winners);
  }
}

export default CarRacingGame;
