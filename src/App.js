import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { GAME_INFO } from "./constant.js";

class App {
  constructor() {
    this._carArr = [];
    this._tryNumber = 0;
  }

  async play() {
    await this.getInputCar();
    await this.getInputTry();
  }

  async getInputCar() {
    const carName = await Console.readLineAsync(GAME_INFO.INPUT_CAR);
    this.carArr = carName.split(",");
  }

  set carArr(car) {
    car = car.map((carName) => carName.replace(/\s/g, ""));

    if (car.some((carName) => carName.length > 6)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }

    this._carArr = car;
  }

  get carArr() {
    return this._carArr;
  }

  async getInputTry() {
    this.tryNumber = await Console.readLineAsync(GAME_INFO.INPUT_TRY);
  }

  set tryNumber(tryValue) {
    tryValue = Number(tryValue);
    if (tryValue === 0) {
      throw new Error("[ERROR] 1회 이상 시도해야 합니다.");
    }

    if (isNaN(tryValue)) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }

    this._tryNumber = tryValue;
  }

  get tryNumber() {
    return this._tryNumber;
  }

  getRandomNumber() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber;
  }

  forwardOrStop() {
    const isForward = this.getRandomNumber() > 3;
    return isForward;
  }

  goForward() {
    return this.forwardOrStop() ? "-" : "";
  }

}

export default App;
