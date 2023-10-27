import { Console } from "@woowacourse/mission-utils";
import Messages from "./common/message.js";

class CarRacing {
  constructor() {}

  startGame() {
    this.getCarName();
  }

  async getCarName() {
    let carName = await Console.readLineAsync(
      Messages.ENTER_RACING_CAR_NAME_MESSAGE
    );
  }
}

export default CarRacing;
