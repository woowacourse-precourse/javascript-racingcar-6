import { Console, Random } from '@woowacourse/mission-utils';

export default class RaceController {
  constructor({ userInputCarList, userInputPlayNumber }) {
    this.carList = userInputCarList;
    this.playNumber = userInputPlayNumber;
  }

  startGame() {
    Console.print('\n', '실행 결과');
    let currentPlayNumber = 0;
    while (this.playNumber > currentPlayNumber) {
      this.countScore();
      this.printResult();
      currentPlayNumber += 1;
    }
    this.printWinner();
  }

  countScore() {
    this.carList.forEach((_, index) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        this.carList[index].score += 1;
      }
    });
  }

  printResult() {
    const makeResultObject = (carName, score) => `${carName} : ${score}`;
    this.carList.forEach(car => {
      const score = '-'.repeat(car.score);
      Console.print(makeResultObject(car.carName, score));
    });
    Console.print('\n');
  }

  printWinner() {
    let winner = [];
    let highestScore = 0;
    this.carList.forEach(car => {
      highestScore = Math.max(highestScore, car.score);
    });
    winner = this.carList
      .filter(car => car.score === highestScore)
      .map(car => car.carName)
      .join(',');
    Console.print(`최종 우승자 : ${winner}`);
  }
}
