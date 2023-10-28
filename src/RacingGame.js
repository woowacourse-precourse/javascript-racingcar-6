import { Console } from "@woowacourse/mission-utils";

import Car from "./Car.js";

class RacingGame {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
  }
  async startGame() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = carNamesInput.split(",");

    const isValidCarName = (name) => {
      return name.trim().length <= 5;
    };

    carNames.forEach((carName) => {
      try {
        if (!isValidCarName(carName)) {
          throw new Error(
            `[ERROR] 자동차 이름 "${carName}"은(는) 5자 이하여야 합니다.`
          );
        }
        const car = new Car(carName);
        this.cars.push(car);
      } catch (error) {
        throw error;
      }
    });

    const tryCountInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.tryCount = Number(tryCountInput);
  }
}

export default RacingGame;
