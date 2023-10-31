import { Console, Random } from '@woowacourse/mission-utils';
import { MOVE_NUMBER } from '../constants/constants.js';

class RunRace {
  getRandomMove() {
    return Random.pickNumberInRange(0, 9);
  }

  getRandomProgress() {
    return this.getRandomMove() >= MOVE_NUMBER ? '-' : '';
  }

  runRace(cars, tryCount) {
    const progressList = new Array(cars.length).fill('');

    for (let i = 0; i < tryCount; i += 1) {
      cars.forEach((car, carIndex) => {
        progressList[carIndex] += this.getRandomProgress();
        Console.print(`${car} : ${progressList[carIndex]}`);
      });

      Console.print('');
    }

    this.printWinners(cars, progressList);
  }

  findWinners = (cars, progressList) =>
    cars.filter(
      (car, carIndex) => progressList[carIndex].length === this.maxProgress(progressList),
    );

  printWinners = (cars, progressList) =>
    Console.print(`최종 우승자 : ${this.findWinners(cars, progressList).join(', ')}`);

  maxProgress = (progressList) => Math.max(...progressList.map((progress) => progress.length));
}

export default RunRace;
