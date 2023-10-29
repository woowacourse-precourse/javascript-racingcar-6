import { Console } from "@woowacourse/mission-utils";

import { Messages, ErrorMessage } from "./common/message.js";
import playCarRacing from "./controller/playCarRacing.js";
import validateCarNameInput from "./utils/validateCarNameInput.js";
import validateCarNameArray from "./utils/validateCarNameArray.js";
import validateGameCount from "./utils/validateGameCount.js";

class CarRacing {
  constructor() {
    this.cars = [];
    this.count;
  }

  async startGame() {
    await this.getCarName();
  }

  async getCarName() {
    let carName = await Console.readLineAsync(
      Messages.ENTER_RACING_CAR_NAME_MESSAGE
    );

    this.cars = carName.split(",");
    this.cars.map((car) => {
      if (!validateCarNameInput(car)) {
        throw new Error(ErrorMessage.RACING_CAR_INPUT_ERROR_MESSAGE);
      }
    });

    if (!validateCarNameArray(this.cars))
      throw new Error(ErrorMessage.RACING_CAR_DUPLICATE_ERROR_MESSAGE);

    this.getGameCount();
  }

  async getGameCount() {
    this.count = await Console.readLineAsync(Messages.ENTER_COUNT_MESSAGE);
    if (!validateGameCount(this.count))
      throw new Error(ErrorMessage.GAME_COUNT_ERROR_MESSAGE);
    playCarRacing(this.cars, this.count);
  }
}

export default CarRacing;
