import { Random, Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "./message";

class App {
  constructor() {
    this.carsName = this.getCarsName();
    this.position = 0;
  }
  validateCarName = (carsNameArray) => {
    carsNameArray.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(ERROR.CAR_NAME);
      }
    });
  };

  validateNumber = (attemptNumber) => {
    if (isNaN(attemptNumber) || attemptNumber <= 0) {
      throw new Error(ERROR.ATTEMPT_COUNT);
    }
  };

  getCarsName = async () => {
    const carsName = await Console.readLineAsync(GAME.GET_CAR_NAME);
    const carsNameArray = carsName.split(",");
    this.validateCarName(carsNameArray);

    return carsNameArray;
  };

  getAttemptCount = async () => {
    const attemptCount = await Console.readLineAsync(GAME.GET_ATTEMPT_COUNT);
    const attemptNumber = Number(attemptCount);
    this.validateNumber(attemptNumber);

    return attemptNumber;
  };

  generateRandomNumber = () => {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber;
  };

  moveForwardCondition = () => {
    const randomNumber = this.generateRandomNumber();
    if (randomNumber >= 4) {
      position += 1;
    }
    return position;
  };

  moveForward = () => {
    this.carsName.forEach((car) => car.carMove);
    Console.print(`${car.carsName} : ${"-".repeat(car.position)}`);
  };

  selectWinnerByRace = () => {
    const maxCarPosition = Math.max(...this.cars.map((car) => car.position));
    const winnerCars = this.carsName.filter(
      (car) => car.position === maxCarPosition
    );
    return winnerCars.map((car) => car.carName);
  };

  racingGame = () => {
    const attemptCount = this.getAttemptCount();
    while (attemptCount > 0) {
      this.moveForward();
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
