import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView';
import randomNumberGenerator from '../utils/randomNumberGenerator';
// import OutputView from '../view/OutputView';

export default class RaceController {
  constructor() {
    this.inputView = new InputView();
    this.carList = [];
    // this.outputView = new OutputView();
  }

  // 회차별 출력에 쓸 양식 만들기 { pobi : ----- }
  // makeCarObj() {
  //   const { userInputCarList } = this.inputView;
  //   userInputCarList.forEach((userInputCar, index) => {
  //     this.carList.userInputCarList[index] = { carName: userInputCar, score: 0 };
  //   });
  //   return this.carList.userInputCarList;
  // }

  startGame() {
    let currentPlayNumber = 0;
    while (this.playNumber > currentPlayNumber) {
      this.countScore();
      this.printResult();
      currentPlayNumber += 1;
    }
    // Output.printWinner(); 해줄 예정
    this.printWinner(); // 마찬가지로 확신 안 서지만 시도
  }

  countScore() {
    // 전진 카운팅 함수
    this.carList.forEach((_, index) => {
      if (randomNumberGenerator >= 4) {
        this.carList[index].score += 1;
      }
    });
  }

  printResult() {
    // 회차별 각 차량 전진 횟수 프린트 함수
    this.carList.forEach(car => {
      const score = `-`.repeat(car.score);
      Console.print(`${car.name} : ${car.score}`, score);
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
      .map(car => car.name)
      .join(',');
    Console.print(`최종 우승자 : ${winner}`);
  }
}
