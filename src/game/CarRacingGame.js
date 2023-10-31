import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Inputs from '../utils/Inputs.js';
import ReturnWinner from './ReturnWinner.js';

class CarRacingGame {
  constructor() {
    this.cars = [];
    this.inputs = new Inputs();
  }

  async gameStart() {
    const carNames = await this.inputs.returnCarNames();
    this.cars = carNames.map((name) => new Car(name));

    const tryCount = await this.inputs.getTryCount();

    Console.print('\n실행 결과');

    for (let i = 0; i < tryCount; i += 1) {
      this.runRaceRound();
    }

    this.printWinners();
  }

  runRaceRound() {
    this.cars.forEach((car) => {
      car.move();
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
    Console.print('');
  }

  printWinners() {
    const returnWinner = new ReturnWinner();
    const winners = returnWinner.findWinners(this.cars);
    returnWinner.printWinners(winners);
  }
}

export default CarRacingGame;
