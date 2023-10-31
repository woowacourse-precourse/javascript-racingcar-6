import { Console, Random } from '@woowacourse/mission-utils';

class RunRace {
  constructor() {
    this.progressList = [];
  }

  getRandomMove() {
    return Random.pickNumberInRange(0, 9);
  }

  getRandomProgress() {
    return this.getRandomMove() >= 4 ? '-' : '';
  }

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

    return this.progressList;
  }
}

export default RunRace;
