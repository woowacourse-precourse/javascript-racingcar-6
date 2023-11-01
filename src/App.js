import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE, POSITION_MARK } from "./constants.js";
import { enterCarName, enterMoveCount } from "./utils/playerInput.js";
import Car from "./Car.js";

class App {
  #carNames;
  #moveCount;
  #cars = [];

  async initialInput() {
    this.#carNames = await enterCarName();
    this.#moveCount = await enterMoveCount();
  }

  async setCars(carNames) {
    this.#carNames.forEach((carName) => {
      const car = new Car(carName);
      this.#cars.push(car);
    });
  }

  isGoing() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  playerTurn(car) {
    if (this.isGoing()) {
      car.goAhead();
    }
  }

  printCurrentPosition(car) {
    Console.print(
      `${car.getName()} : ${POSITION_MARK.repeat(car.getPosition())}`,
    );
  }

  oneTurn() {
    this.#cars.forEach((car) => {
      this.playerTurn(car);
    });
    this.#cars.forEach((car) => {
      this.printCurrentPosition(car);
    });
  }

  repeatTurn(repeatCount) {
    Array.from({ length: repeatCount }).forEach(() => {
      this.oneTurn();
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
    await this.initialInput();
    await this.setCars();
    Console.print("");
    Console.print(MESSAGE.gameStart);
    this.repeatTurn(this.#moveCount);
    this.printWinner(this.findWinner());
  }
}

export default App;
