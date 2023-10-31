import InputView from '../view/InputView';
import randomNumberGenerator from '../utils/randomNumberGenerator';

export default class RaceController {
  constructor() {
    this.inputView = new InputView();
    this.carList = [];
    // this.playNumber = 0;
  }

  // 회차별 출력에 쓸 양식 만들기 { pobi : ----- }
  async makeCarObj() {
    const { userInputCarList } = this.inputView;
    userInputCarList.forEach((userInputCar, index) => {
      this.carList.userInputCarList[index] = { carName: userInputCar, score: 0 };
    });
    return this.carList.userInputCarList;
  }

  startGame() {
    let currentPlayNumber = 0;
    while (this.playNumber > currentPlayNumber) {
      this.countScore();
      // Output.playResult(); 해줄 예정
      currentPlayNumber += 1;
    }
    // Output.playWinner(); 해줄 예정
  }

  countScore() {
    // 전진 카운팅 함수
    this.carList.forEach((_, index) => {
      if (randomNumberGenerator >= 4) {
        this.carList[index].score += 1;
      }
    });
  }
}
