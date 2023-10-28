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
  }

  async getValidCarNames() {
    const input = await Console.readLineAsync(Message.INFO.START);
    return InputValidator.CarNames(input);
  }

  createCars(carNamesArr) {
    this.cars = carNamesArr.map((carName) => new Car(carName));
  }
}

export default App;
