// class App {
//   constructor() {
//     // this.cars = [];
//     // this.tryCount = 0;
//     this.inputs = new Inputs();
//   }

//   async play() {
//     const cars = await this.inputs.returnCarNames();
//     const tryCount = await this.inputs.getTryCount();
//     Console.print('\n실행 결과');
//     new RunRace().runRace(cars, tryCount);
//   }
// }

// export default App;

import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js'; // Car 클래스 import
import ReturnWinner from './ReturnWinner.js'; // ReturnWinner 클래스 import
import Inputs from './input/Inputs.js';

class App {
  constructor() {
    this.cars = [];
    this.inputs = new Inputs();
  }

  async play() {
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

export default App;
