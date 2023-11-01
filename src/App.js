import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import getCarName from "./GetCarName.js";
import * as message from "./Message.js";
import startRacing from "./Racing.js";

class App {
  async play() {
    const carNames = await getCarName();
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
