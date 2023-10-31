import { Console, Random } from '@woowacourse/mission-utils';
import ReturnWinner from './ReturnWinner.js';

class RunRace {
  constructor() {
    this.progressList = [];
  }

  getRandomMove = () => Random.pickNumberInRange(0, 9);

  getRandomProgress = () => (this.getRandomMove() >= 4 ? '-' : '');

  printCarProgress(car, carIndex) {
    return Console.print(`${car} : ${this.progressList[carIndex]}`);
  }

  runRaceRound(cars) {
    cars.forEach((_, carIndex) => {
      this.progressList[carIndex] += this.getRandomProgress();
      this.printCarProgress(cars[carIndex], carIndex);
    });

    Console.print('');
  }

  runRace(cars, tryCount) {
    this.progressList = new Array(cars.length).fill('');

    for (let tryNumber = 0; tryNumber < tryCount; tryNumber += 1) {
      this.runRaceRound(cars);
    }

    new ReturnWinner(cars).printWinners(this.progressList);
  }
}

export default RunRace;
