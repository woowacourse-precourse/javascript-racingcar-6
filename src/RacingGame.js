import { enterCarName, enterMoveCount } from "./utils/playerInput.js";
import Car from "./Car.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE, POSITION_MARK } from "./constants.js";

class RacingGame {
  #carNames;
  #moveCount;
  #cars = [];

  async setCarNames() {
    this.#carNames = await enterCarName();
  }

  async setMoveCount() {
    this.#moveCount = await enterMoveCount();
  }

  async setCars(carNames) {
    this.#carNames.forEach((carName) => {
      const car = new Car(carName);
      this.#cars.push(car);
    });
  }

  isMoving() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  moveIfTrue(car, isMoving) {
    if (isMoving) {
      car.goAhead();
    }
  }

  moveAllCars() {
    this.#cars.forEach((car) => {
      this.moveIfTrue(car, this.isMoving());
    });
  }

  printCurrentPosition(car) {
    Console.print(
      `${car.getName()} : ${POSITION_MARK.repeat(car.getPosition())}`,
    );
  }

  printAllCurrentPosition() {
    this.#cars.forEach((car) => {
      this.printCurrentPosition(car);
    });
  }

  executeGameByMoveCount(moveCount) {
    Array.from({ length: moveCount }).forEach(() => {
      this.moveAllCars();
      this.printAllCurrentPosition();
      Console.print("");
    });
  }

  findWinner() {
    return this.#cars.reduce(
      (acc, car) => {
        const currentPosition = car.getPosition();
        if (currentPosition > acc.maxPosition) {
          return { winners: [car.getName()], maxPosition: currentPosition };
        }
        if (currentPosition === acc.maxPosition) {
          acc.push(car.getName());
          return { winners: acc, maxPosition: acc.maxPosition };
        }
        if (currentPosition < acc.maxPosition) {
          return acc;
        }
      },
      {
        winners: [],
        maxPosition: -Infinity,
      },
    ).winners;
  }
  printWinner(winnerName) {
    Console.print(`${MESSAGE.theWinnerIs}${winnerName.join(", ")}`);
  }

  async play() {
    await this.setCarNames();
    await this.setMoveCount();
    await this.setCars(this.#carNames);
    this.executeGameByMoveCount(this.#moveCount);
    this.printWinner(this.findWinner());
  }
}

export default RacingGame;
