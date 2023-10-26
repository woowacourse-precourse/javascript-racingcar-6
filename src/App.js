import { Console } from "@woowacourse/mission-utils";

import InputController from "./Controller/InputController.js";
import Car from "./Model/Car.js";

class App {
  constructor() {
    this.InputController = new InputController();
  }

  async play() {
    // 1. 사용자의 입력을 받는다
    await this.InputController.init();

    // 2. 입력된 n대만큼 자동차를 생성한다
    const { carNames, tryCount } = this.InputController;
    const car = new Car(carNames, tryCount);
    Console.print(car);
  }
}

export default App;
