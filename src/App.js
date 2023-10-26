import { Console } from "@woowacourse/mission-utils";

import InputController from "./Controller/InputController.js";

class App {
  constructor() {
    this.InputController = new InputController();
  }

  async play() {
    // 1. 사용자의 입력을 받는다
    const car = await this.InputController.init();
    Console.print(car);
  }
}

export default App;
