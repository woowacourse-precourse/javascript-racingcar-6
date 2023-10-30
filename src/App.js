import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import * as message from "./Message.js";

class App {
  async play() {
    const carNames = await this.getCarName();
    const carObjects = carNames.map((carName) => new Car(carName));
    let moveCount = await this.getMoveCount();

    Console.print(message.RACING_RESULT);

    this.startRacing(carObjects, moveCount);
    this.printWinner(carObjects);
  }

  printWinner(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    Console.print(message.FINAL_WINNER + winners.join(", "));
  }

  startRacing(cars, moveCount) {
    if (moveCount > 0) {
      cars.forEach((car) => {
        this.racing(car);
      });
      this.displayRacingResults(cars);

      this.startRacing(cars, moveCount - 1);
    }
  }

  racing(car) {
    const number = Random.pickNumberInRange(0, 9);
    if (number >= 4) {
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

  displayRacingResults(cars) {
    cars.forEach((car) => {
      this.printResult(car);
    });
    Console.print("");
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
      throw new Error(`${message.ERROR_INVALUD_MOVE_COUNT}`);
    }
  }
}

export default App;
