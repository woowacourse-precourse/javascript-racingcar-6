import { Console } from '@woowacourse/mission-utils';

class ReturnWinner {
  constructor(cars) {
    this.cars = cars;
    this.progressList = new Array(cars.length).fill('');
  }

  getMaxProgress() {
    return Math.max(...this.progressList.map((progress) => progress.length));
  }

  findWinners() {
    return this.cars.filter(
      (_, carIndex) => this.progressList[carIndex].length === this.getMaxProgress(),
    );
  }

  printWinners() {
    const winners = this.findWinners();
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default ReturnWinner;
