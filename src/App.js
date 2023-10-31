import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { GAME_INFO } from "./constant.js";

class App {
  constructor() {
    this._carArr = [];
  }

  async play() {
    this.getInputCar();
  }

  async getInputCar() {
    const carName = await Console.readLineAsync(GAME_INFO.INPUT_CAR);
    this.carArr = carName.split(",");
  }

  set carArr(car) {
    car = car.map((carName) => carName.replace(/\s/g, ""));

    if (car.some((carName) => carName.length > 6)) {
      console.error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }

    this._carArr = car;
  }
}

export default App;
