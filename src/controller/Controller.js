import InputView from '../view/InputView.js';
import Car from '../model/Car.js';
import OutputView from '../view/OutputView.js';

export default class Controller {
  constructor() {
    this.carList = [];
    this.MAX_MOVE = 0;
  }

  /**
   * 자동차 이름 목록을 통해 자동차 객체를 생성합니다.
   * @param {string[]} [자동차 이름 목록]
   */
  createCar(carNameList) {
    carNameList.forEach((carName) => {
      this.carList.push(new Car(carName));
    });
  }

  singleTry() {
    this.carList.forEach((car) => {
      car.tryToMove();
      this.MAX_MOVE = Math.max(this.MAX_MOVE, car.getDistance());
    });
    OutputView.printSingleTryResult(this.carList);
  }

  /**
   * 시도한 횟수만큼 '자동차의 움직임 시도'를 반복합니다.
   * @param {number} [시도할 횟수]
   */
  moveCars(tryCount) {
    OutputView.printTryResult();
    for (let i = 0; i < tryCount; i += 1) {
      this.singleTry();
    }
  }

  findMaxMoveCars() {
    return this.carList.filter((car) => this.MAX_MOVE === car.getDistance());
  }

  async run() {
    const carNameList = await InputView.getCarNameList();
    this.createCar(carNameList);

    const tryCount = await InputView.getTryCount();
    this.moveCars(tryCount);

    const maxMoveCars = this.findMaxMoveCars();
    OutputView.printWinner(maxMoveCars);
  }
}
