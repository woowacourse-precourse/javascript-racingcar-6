import { Console, Random } from '@woowacourse/mission-utils';
import Inputs from './input/Inputs.js';
import ReturnWinner from './runRace/ReturnWinner.js';

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

class App {
  constructor() {
    // this.cars = [];
    // this.tryCount = 0;
    this.inputs = new Inputs();
  }

  async play() {
    const cars = await this.inputs.returnCarNames();
    const tryCount = await this.inputs.getTryCount();
    Console.print('\n실행 결과');
    const progressList = this.runRace(cars, tryCount);
    const winnerPrinter = new ReturnWinner(cars, progressList);
    winnerPrinter.printWinners();
  }

  runRace(cars, tryCount) {
    const progressList = new Array(cars.length).fill('');

    for (let i = 0; i < tryCount; i += 1) {
      cars.forEach((car, carIndex) => {
        progressList[carIndex] += this.generateRandomProgress();
        Console.print(`${car} : ${progressList[carIndex]}`);
      });
      Console.print('');
    }

    return progressList;
  }

  printWinners = (cars, progressList) =>
    Console.print(`최종 우승자 : ${this.findWinners(cars, progressList).join(', ')}`);

  getRandomMove = () => Random.pickNumberInRange(0, 9);

  generateRandomProgress = () => (this.getRandomMove() >= 4 ? '-' : '');

  findWinners = (cars, progressList) =>
    cars.filter(
      (car, carIndex) => progressList[carIndex].length === this.maxProgress(progressList),
    );

  maxProgress = (progressList) => Math.max(...progressList.map((progress) => progress.length));
}

export default App;
