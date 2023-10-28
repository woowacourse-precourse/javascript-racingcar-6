import { Console } from "@woowacourse/mission-utils";
import Input from "../view/Input.js";
// import RandomCarMoving from "../model/RandomCarMoving.js";
import CarMoving from "../model/CarMoving.js";
import CarListCheck from "../validate/CarListCheck.js";
import TryNumberCheck from "../validate/TryNumberCheck.js";

class RacingCarController {
  constructor() {
    this.carNames;
    this.TryCount;
    this.input = new Input();
    // this.randomMoving = new RandomCarMoving();
    this.car = new CarMoving();
    this.carListCheck = new CarListCheck();
    this.tryNumberCheck = new TryNumberCheck();
  }

  async start() {
    // this.carNames = await this.input.inputCarNames();

    //자동차 이름 입력받기
    this.carNames = this.carListCheck.validate(
      await this.input.inputCarNames()
    );

    // Console.print(this.carNames);
    //게임 횟수 입력받기
    this.TryCount = this.tryNumberCheck.validate(
      await this.input.inputTryNumber()
    );
  }
}

export default RacingCarController;
