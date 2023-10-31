import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import * as message from "./Message.js";
import startRacing from "./Racing.js";

class App {
  async play() {
    const carNames = await this.getCarName();
    const carObjects = carNames.map((carName) => new Car(carName));
    let moveCount = await this.getMoveCount();

    Console.print(message.RACING_RESULT);

    startRacing(carObjects, moveCount);
    this.printWinner(carObjects);
  }

  printWinner(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    Console.print(message.FINAL_WINNER + winners.join(", "));
  }

  async getCarName() {
    const carNames = await Console.readLineAsync(`${message.GET_CAR_NAME}`);
    const carNameArray = carNames.split(",");
    if (this.validationCarName(carNameArray)) {
      return carNameArray;
    } else {
      throw Error(`${message.ERROR_INVALID_NAME}`);
    }
  }

  validationCarName(carArray) {
    return carArray.every((car) => car.length <= 5 && car.length > 0);
  }

  async getMoveCount() {
    const moveCount = await Console.readLineAsync(`${message.GET_MOVE_COUNT}`);
    if (!isNaN(moveCount)) {
      return moveCount;
    } else {
      throw new Error(`${message.ERROR_INVALID_MOVE_COUNT}`);
    }
  }
}

export default App;
