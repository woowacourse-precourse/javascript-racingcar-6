import InputView from "../View/InputView.js";
import carInstance from "../Model/Car.js";

class InputController {
  constructor() {
    this.inputView = new InputView();
  }

  // 1. 사용자의 입력을 받는다
  async init() {
    const carNames = await this.inputView.getCarNames();
    const tryCount = await this.inputView.getTryCount();

    // 2. 입력된 이름과 시도 횟수를 바탕으로 자동차를 생성한다
    return InputController.createCar(carNames, tryCount);
  }

  static createCar(carNames, tryCount) {
    carInstance.initCars(carNames, tryCount);
  }
}

export default InputController;
