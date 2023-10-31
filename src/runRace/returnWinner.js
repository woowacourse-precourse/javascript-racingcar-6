import { Console } from '@woowacourse/mission-utils';

class ReturnWinner {
  constructor(cars, progressList) {
    this.cars = cars;
    this.progressList = progressList;
  }

  getMaxProgress() {
    return Math.max(...this.progressList.map((progress) => progress.length));
  }

  findWinners() {
    return this.cars.filter(
      (car, carIndex) =>
        this.progressList[carIndex].length === this.getMaxProgress(this.progressList),
    );
  }

  printWinners() {
    Console.print(`최종 우승자 : ${this.findWinners(this.cars, this.progressList).join(', ')}`);
  }
}

export default ReturnWinner;
