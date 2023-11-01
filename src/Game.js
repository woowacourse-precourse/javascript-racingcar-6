import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Game {
  constructor() {
    this.attemptNumber = 0;
    this.finalWinnerList = [];
    this.carList = [];
  }

  getAttemptNumber() {
    return this.attemptNumber;
  }

  getCarList() {
    return this.carList;
  }

  getFinalWinnerList() {
    return this.finalWinnerList;
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
    if (isNaN(attemptNumber)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    this.attemptNumber = attemptNumber;
  }

  decideFinalWinner() {
    let maxPosition = 0;
    let finalWinnerList = [];
    for (const car of this.carList) {
      if (car.isFasterThan(maxPosition)) {
        maxPosition = car.getPosition();
        finalWinnerList = [car.getName()];
      } else if (car.isSameAs(maxPosition)) {
        finalWinnerList.push(car.getName());
      }
    }
    this.finalWinnerList = finalWinnerList;
  }

  generateFinalResultMessage() {
    let finalResultMessage = "최종 우승자 : ";
    for (const finalWinner of this.finalWinnerList) {
      finalResultMessage += finalWinner + ", ";
    }
    finalResultMessage = finalResultMessage.slice(0, -2);
    return finalResultMessage;
  }
}

export default Game;
