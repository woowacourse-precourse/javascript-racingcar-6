import { Console } from "@woowacourse/mission-utils";
import Input from "../view/Input.js";
// import RandomCarMoving from "../model/RandomCarMoving.js";
import CarMoving from "../model/CarMoving.js";
import CarListCheck from "../validate/CarListCheck.js";
import TryNumberCheck from "../validate/TryNumberCheck.js";

class RacingCarController {
  constructor() {
    this.carNames;
    this.tryCount;
    this.input = new Input();
    // this.randomMoving = new RandomCarMoving();
    this.car = new CarMoving();
    this.carListCheck = new CarListCheck();
    this.tryNumberCheck = new TryNumberCheck();
  }

  async start() {
    try {
      this.carNames = await this.setcarName();
      this.tryCount = await this.setTryNumber();
      Console.print(this.carNames + this.tryCount);
    } catch (error) {
      throw new Error(error);
    }
  }

  //자동차 이름 입력받기
  async setcarName() {
    return this.carListCheck.validate(await this.input.inputCarNames());
  }

  //게임 횟수 입력받기
  async setTryNumber() {
    Console.print("dd");
    return this.tryNumberCheck.validate(await this.input.inputTryNumber());
  }
}

export default RacingCarController;
