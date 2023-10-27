import { Console } from "@woowacourse/mission-utils";
import Input from "./view/Input.js";

class RacingCarController {
  constructor() {
    this.carNames;
    this.totalTryCount;
    this.input = new Input();
  }

  async start() {
    this.carNames = await this.input.inputCarNames();
    Console.print(this.carNames);
  }
}

export default RacingCarController;
