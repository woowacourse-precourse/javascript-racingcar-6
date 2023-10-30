import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Game {
  constructor() {
    this.attemptNumber = 0;
    this.finalWinner = [];
    this.carList = [];
  }

  async inputCarName() {
    const carNameList = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    for (const carName of carNameList.split(",")) {
      if (carName.length > 5) {
        throw new Error("[ERROR] 이름이 5자 초과입니다.");
      }
      this.carList.push(new Car(carName));
    }
  }

  async inputAttemptNumber() {
    const attemptNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.attemptNumber = attemptNumber;
  }

  decideFinalWinner() {
    let maxPosition = 0;
    let finalWinner = [];
    for (const car of this.carList) {
      if (car.position > maxPosition) {
        maxPosition = car.position;
        finalWinner = [car.name];
      } else if (car.position === maxPosition) {
        finalWinner.push(car.name);
      }
    }
    this.finalWinner = finalWinner;
  }
}

export default Game;
