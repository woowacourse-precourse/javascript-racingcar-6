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
    //TODO: 예외사항
    const carNames = carNamesInput.split(",");
    carNames.forEach((car) => {
      car = new Car(car);
      this.cars.push(car);
    });
    const tryCountInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.tryCount = Number(tryCountInput);
    //TODO: 예외사항
  }
}

export default RacingGame;
