import Validation from '../utils/Validation.js';
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

  async run() {
    const carNames = await InputView.carName();
    const carNameList = carNames.split(',');

    Validation.carNameInput(carNameList);
    this.createCar(carNameList);

    const tryCount = await InputView.tryCount();
    const tryCountNumber = Number(tryCount);
    Validation.tryCountInput(tryCountNumber);
    OutputView.printNewLine();
    this.moveCars(tryCountNumber);
  }
}

const c = new Controller();
console.log(await c.run());
