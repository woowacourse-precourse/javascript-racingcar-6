import { Console } from '@woowacourse/mission-utils';
// import randomNumberGenerator from '../utils/randomNumberGenerator';
import { Random } from '@woowacourse/mission-utils';
// import OutputView from '../view/OutputView';

export default class RaceController {
  constructor({ userInputCarList, userInputPlayNumber }) {
    this.carList = userInputCarList;
    this.playNumber = userInputPlayNumber;
  }

  startGame() {
    let currentPlayNumber = 0;
    while (this.playNumber > currentPlayNumber) {
      this.countScore();
      this.printResult();
      currentPlayNumber += 1;
    }
    this.printWinner();
  }

  countScore() {
    // 전진 카운팅 함수
    this.carList.forEach((_, index) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        this.carList[index].score += 1;
      }
    });
  }

  printResult() {
    const makeResultObject = (carName, score) => `${carName} : ${score}`;
    // 회차별 각 차량 전진 횟수 프린트 함수
    this.carList.forEach(car => {
      const score = '-'.repeat(car.score);
      Console.print(makeResultObject(car.carName, score));
    });
    Console.print('\n');
  }

  printWinner() {
    // 최종 전진 누적 횟수 프린트 함수
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
