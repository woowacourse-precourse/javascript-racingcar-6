import { MissionUtils } from "@woowacourse/mission-utils";
import UserInput from "../Input/UserInput";
import RacingCar from "./RacingCar";
import { MESSAGES } from "../Message";
const { Console } = MissionUtils;

class RacingStart {
  #userInput = new UserInput();
  #racingCar = new RacingCar();

  racing() {
    Console.print(MESSAGES.RESULT);
    for (let i = 0; i < this.#userInput.getTryCount(); i++) {
      this.#racingCar.moveForward();
      this.#racingCar.printRacingState();
    }
    Console.print(`${MESSAGES.WINNER}${this.#racingCar.getWinnerName()}`);
  }

  async start() {
    await this.#userInput.input();
    this.#racingCar.resetToZero();
    this.racing();
  }
}

export default RacingStart;
