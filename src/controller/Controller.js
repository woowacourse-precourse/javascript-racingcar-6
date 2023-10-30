import Validation from '../utils/Validation.js';
import InputView from '../view/InputView.js';
import Car from '../model/Car.js';

export default class Controller {
  constructor() {
    this.carList = [];
  }

  createCar(carNameList) {
    carNameList.forEach((carName) => {
      this.carList.push(new Car(carName));
    });
  }

  async run() {
    const carNames = await InputView.carName();
    const carNameList = carNames.split(',');

    Validation.carNameInput(carNameList);
    this.createCar(carNameList);

    const tryCount = await InputView.tryCount();
    Validation.tryCountInput(tryCount);
  }
}

const c = new Controller();
console.log(await c.run());
