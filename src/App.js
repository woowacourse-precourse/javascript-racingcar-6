import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async play() {
    const carNames = await this.getCarName();
    const carObjects = carNames.map((carName) => new Car(carName));
    let moveCount = await this.getMoveCount();

    this.startRacing(carObjects, moveCount);
  }

  async getCarName() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n"
    );
    const carNameArray = carNames.split(",");
    if (this.validationCarName(carNameArray)) {
      return carNameArray;
    } else {
      throw Error("[ERROR] 에러");
    }
  }

  validationCarName(carArray) {
    carArray.forEach((car) => {
      if (car.length > 5) {
        Console.print("에러 (5자 이하로 해야돼)");
        return false;
      }
    });
    return true;
  }

  async getMoveCount() {
    return Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }
}

export default App;
