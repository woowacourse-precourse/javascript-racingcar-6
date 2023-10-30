import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Game {
  constructor() {
    this.attemptNumber = 0;
    this.finalWinner = [];
    this.car = [];
  }

  async inputCarName() {
    const carNameList = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    for (const carName of carNameList.split(",")) {
      if (carName.length > 5) {
        throw new Error("[ERROR] 이름이 5자 초과입니다.");
      }
      this.car.push(new Car(carName));
    }
  }
}

export default Game;
