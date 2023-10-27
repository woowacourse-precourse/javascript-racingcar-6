import { Console } from "@woowacourse/mission-utils";
import Input from "../view/Input.js";
import CarListCheck from "../validate/CarListCheck.js";

class RacingCarController {
  constructor() {
    this.carNames;
    this.totalTryCount;
    this.input = new Input();
    this.carListCheck = new CarListCheck();
  }

  async start() {
    // this.carNames = await this.input.inputCarNames();

    this.carNames = this.carListCheck.validate(
      await this.input.inputCarNames()
    );
    Console.print(this.carNames);
  }
}

export default RacingCarController;
