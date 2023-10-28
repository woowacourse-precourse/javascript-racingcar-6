import { Console } from "@woowacourse/mission-utils";
import Car from "./Model/Car.js";
import Message from "./util/Message.js";
import InputValidator from "./util/InputValidator.js";

class App {
  constructor() {
    this.tryCount = 0;
    this.cars = [];
    this.maxStep = 0;
  }

  async play() {
    const carNamesArr = await this.getValidCarNames(); // 자동차 이름 묻기
    this.createCars(carNamesArr); // 자동차 생성하기
    await this.getValidCount(); // 시도횟수 묻기
  }

  async getValidCarNames() {
    const input = await Console.readLineAsync(Message.INFO.ASK_CAR_NAMES);
    return InputValidator.CarNames(input);
  }

  createCars(carNamesArr) {
    this.cars = carNamesArr.map((carName) => new Car(carName));
  }

  async getValidCount() {
    const input = await Console.readLineAsync(Message.INFO.ASK_TRY_COUNT);
    this.tryCount = InputValidator.tryCount(input);
  }
}

export default App;
