import { Console } from "@woowacourse/mission-utils";

import Messages from "./common/message.js";

import validateCarNameInput from "./utils/validateCarNameInput.js";
import validateCarNameArray from "./utils/validateCarNameArray.js";

class CarRacing {
  constructor() {
    this.cars = [];
    this.count;
  }

  startGame() {
    this.getCarName();
  }

  async getCarName() {
    let carName = await Console.readLineAsync(
      Messages.ENTER_RACING_CAR_NAME_MESSAGE
    );

    this.cars = carName.split(",");
    this.cars.map((car) => {
      if (!validateCarNameInput(car)) {
        throw new Error(Messages.RACING_CAR_INPUT_ERROR_MESSAGE);
      }
    });
    console.log(this.cars);
    if (!validateCarNameArray(this.cars))
      throw new Error(Messages.RACING_CAR_DUPLICATE_ERROR_MESSAGE);

    this.getGameCount();
  }

  async getGameCount() {
    this.count = await Console.readLineAsync(Messages.ENTER_COUNT_MESSAGE);
    console.log(this.count);
  }
}

export default CarRacing;
