import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async play() {
    const carNames = await this.getCarName();
    const carObjects = carNames.map((carName) => new Car(carName));
    let moveCount = await this.getMoveCount();

    Console.print("실행 경과");

    this.startRacing(carObjects, moveCount);
  }

  startRacing(cars, moveCount) {
    if (moveCount > 0) {
      cars.forEach((car) => {
        this.racing(car);
        this.printResult(car);
      });
      Console.print("");

      this.startRacing(cars, moveCount - 1);
    }
  }

  racing(car) {
    const number = Random.pickNumberInRange(0, 9);
    if (number > 4) {
      car.move();
    }
  }

  printResult(car) {
    const score = [];
    for (let i of Array.from({ length: car.position }, (_, index) => index)) {
      score.push("-");
    }

    Console.print(car.name + " : " + score.join(""));
  }

  async getCarName() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n"
    );
    const carNameArray = carNames.split(",");
    if (this.validationCarName(carNameArray)) {
      return carNameArray;
    } else {
      throw Error("[ERROR] 자동차 이름을 5자 이하로 해야돼");
    }
  }

  validationCarName(carArray) {
    return carArray.every((car) => car.length <= 5);
  }

  async getMoveCount() {
    const moveCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    if (!isNaN(moveCount)) {
      return moveCount;
    } else {
      throw new Error("[ERROR] 숫자를 입력 해야돼");
    }
  }
}

export default App;
