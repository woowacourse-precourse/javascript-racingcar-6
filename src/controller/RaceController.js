import InputView from '../view/InputView';

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
}
