import InputView from '../view/InputView.js';
import Car from '../model/Car.js';
import OutputView from '../view/OutputView.js';

export default class Controller {
  constructor() {
    this.carList = [];
    this.MAX_MOVE = 0;
  }

  createCar(carNameList) {
    carNameList.forEach((carName) => {
      this.carList.push(new Car(carName));
    });
  }

  singleTry() {
    this.carList.forEach((car) => {
      car.tryToMove();
      this.MAX_MOVE = Math.max(this.MAX_MOVE, car.getMove());
    });
    OutputView.printSingleTryResult(this.carList);
  }

  moveCars(tryCount) {
    OutputView.printTryResult();
    for (let i = 0; i < tryCount; i += 1) {
      this.singleTry();
    }
  }

  findMaxMoveCars() {
    return this.carList.filter((car) => this.MAX_MOVE === car.getMove());
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
