// import CarRacingGame from './CarRacingGame.js';

// class App {
//   async play() {
//     return new CarRacingGame().run();
//   }
// }

// export default App;

import { Console, Random } from '@woowacourse/mission-utils';
import Inputs from './input/Inputs';
import RunRace from './runRace/RunRace';

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
    const progressList = new RunRace().runRace(cars, tryCount);
    this.printWinners(cars, progressList);
    // this.runRace(cars, tryCount);
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

    this.printWinners(cars, progressList);
  }

  getRandomMove = () => Random.pickNumberInRange(0, 9);

  generateRandomProgress = () => (this.getRandomMove() >= 4 ? '-' : '');

  findWinners = (cars, progressList) =>
    cars.filter(
      (car, carIndex) => progressList[carIndex].length === this.maxProgress(progressList),
    );

  printWinners = (cars, progressList) =>
    Console.print(`최종 우승자 : ${this.findWinners(cars, progressList).join(', ')}`);

  maxProgress = (progressList) => Math.max(...progressList.map((progress) => progress.length));
}

export default App;
