import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Inputs from './input/Inputs.js';
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
//     this.runRace(cars, tryCount);
//   }

//   runRace(cars, tryCount) {
//     const progressList = new Array(cars.length).fill('');

//     for (let i = 0; i < tryCount; i += 1) {
//       cars.forEach((car, carIndex) => {
//         progressList[carIndex] += this.generateRandomProgress();
//         Console.print(`${car} : ${progressList[carIndex]}`);
//       });
//       Console.print('');
//     }

//     this.printWinners(cars, progressList);
//   }

//   printWinners = (cars, progressList) =>
//     Console.print(`최종 우승자 : ${this.findWinners(cars, progressList).join(', ')}`);

//   getRandomMove = () => Random.pickNumberInRange(0, 9);

//   generateRandomProgress = () => (this.getRandomMove() >= 4 ? '-' : '');

//   findWinners = (cars, progressList) =>
//     cars.filter(
//       (car, carIndex) => progressList[carIndex].length === this.maxProgress(progressList),
//     );

//   maxProgress = (progressList) => Math.max(...progressList.map((progress) => progress.length));
// }

// export default App;

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
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
