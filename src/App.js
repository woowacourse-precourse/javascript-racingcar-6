import { Console } from "@woowacourse/mission-utils";
import Message from "./util/Message.js";
import CheckInputValidation from "./util/CheckInputValidation.js";

class App {
  constructor() {
    this.tryCount = 0;
    this.cars = [];
    this.maxStep = 0;
  }

  async play() {
    const carNamesArr = await this.getValidCarNames(); // 자동차 이름 묻기
  }

  async getValidCarNames() {
    const input = await Console.readLineAsync(Message.INFO.START);
    return CheckInputValidation.CarNames(input);
  }
}

export default App;
