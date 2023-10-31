import { Console } from "@woowacourse/mission-utils";
import * as messages from "./constants/messages";

import Car from "./Car.js";

class RacingGame {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
  }
  async startGame() {
    const carNamesInput = await Console.readLineAsync(messages.CAR_NAME_PROMPT);
    const carNames = carNamesInput.split(",");

    const isValidCarName = (name) => {
      return name.trim().length <= 5;
    };

    carNames.forEach((carName) => {
      try {
        if (!isValidCarName(carName)) {
          throw new Error(messages.CAR_NAME_ERROR(carName));
        }
        const car = new Car(carName);
        this.cars.push(car);
      } catch (error) {
        throw error;
      }
    });

    const tryCountInput = await Console.readLineAsync(
      messages.TRY_COUNT_PROMPT
    );
    this.tryCount = Number(tryCountInput);
  }
}

export default RacingGame;
