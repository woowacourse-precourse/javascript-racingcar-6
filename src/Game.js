import { MissionUtils, Console } from '@woowacourse/mission-utils';

class Game {
  constructor(carsList, tryNumber) {
    this.carsList = carsList;
    this.tryNumber = tryNumber;
    this.currentPoint = carsList.map(() => 0);
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }

  printCurrent() {
    this.carsList.forEach((name, index) => {
      Console.print(`${name} : ${'-'.repeat(this.currentPoint[index])}`);
    });
    Console.print('');
  }

  printResult() {
    const maxScore = Math.max(...this.currentPoint);
    const winner = [];

    this.carsList.forEach((name, index) => {
      if (this.currentPoint[index] === maxScore) {
        winner.push(name);
      }
    });

    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }

  roundStart() {
    this.currentPoint = this.currentPoint.map((item) => {
      if (this.getRandomNumber() >= 4) {
        return item + 1;
      } else {
        return item;
      }
    });
  }

  gameStart() {
    Console.print('실행 결과');

    for (let i = 0; i < this.tryNumber; i++) {
      this.roundStart();
      this.printCurrent();
    }

    this.printResult();
  }
}

export default Game;
