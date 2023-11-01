import { Random, Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "./message";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  moveForward = () => {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += 1;
    }
  };
}

class App {
  constructor() {
    this.cars = [];
  }
  validateCarName = (carName) => {
    if (carName.length > 5) {
      throw new Error(ERROR.CAR_NAME);
    }
  };

  validateNumber = (attemptNumber) => {
    if (isNaN(attemptNumber) || attemptNumber <= 0) {
      throw new Error(ERROR.ATTEMPT_COUNT);
    }
  };

  getCarsName = async () => {
    const carsName = await Console.readLineAsync(GAME.GET_CAR_NAME);
    const carsNameArray = carsName.split(",");
    carsNameArray.forEach((carName) => {
      this.validateCarName(carName);
      this.cars.push(new Car(carName));
    });
  };

  getAttemptCount = async () => {
    const attemptCount = await Console.readLineAsync(GAME.GET_ATTEMPT_COUNT);
    const attemptNumber = Number(attemptCount);
    this.validateNumber(attemptNumber);

    return attemptNumber;
  };

  moveAllCars = () => {
    this.cars.forEach((car) => {
      car.moveForward();
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
  };

  selectWinnerByRace = () => {
    const maxCarPosition = Math.max(...this.cars.map((car) => car.position));
    const winnerCars = this.cars.filter(
      (car) => car.position === maxCarPosition
    );
    return winnerCars.map((car) => car.name);
  };

  racingGame = () => {
    const attemptCount = this.getAttemptCount();
    while (attemptCount > 0) {
      this.moveAllCars();
      attemptCount -= 1;
    }
    const winners = this.selectWinnerByRace();
    if (winners.length > 1) {
      Console.print(`${GAME.WINNER}${winners.join(", ")}`);
    } else {
      Console.print(`${GAME.WINNER}${winners}`);
    }
  };

  async play() {
    await this.getCarsName();
    await this.getAttemptCount();
    Console.print(GAME.PRINT_EXECUTION_RESULT);
    this.racingGame();
  }
}

export default App;
