import { inputConsoleAsync, printConsole } from "./utils/index.js";
import { MESSAGES } from "./constant/message.js";
import { Validation } from "./Validation.js";
import { Car } from "./Car.js";

class App {
  racingCars;
  racingRepeatNumber;

  constructor() {
    this.racingCars = [];
    this.racingRepeatNumber = 0;
  }

  async play() {
    await this.registerRacingCars();
    await this.registerRacingRepeatNumber();
    while (this.racingRepeatNumber !== 0) {
      this.racing();
      printConsole("");
      this.racingRepeatNumber -= 1;
    }
    this.releaseWinner();
  }

  async registerRacingCars() {
    const cars = Validation.validateRacingCarName(
      await inputConsoleAsync(MESSAGES.COMMENT_INPUT_RACING_CARS)
    );

    if (cars) {
      this.racingCars = this.racingCars.concat(cars.map((car) => new Car(car)));
    }
  }

  async registerRacingRepeatNumber() {
    const number = Validation.validateRacingRepeatNumber(
      await inputConsoleAsync(MESSAGES.COMMENT_INPUT_PLAY_REPEAT_NUMBER)
    );

    if (number) {
      this.racingRepeatNumber = number;
    }
  }

  racing() {
    this.racingCars.forEach((car) => {
      car.moveOrStop();
      printConsole(`${car.name} : ${Array(car.moveCount).fill("-").join("")}`);
    });
  }

  releaseWinner() {
    const topRankCarMoveCount = this.racingCars.sort(
      (car1, car2) => car2.moveCount - car1.moveCount
    )[0].moveCount;
    const topRankCars = this.racingCars
      .filter((car) => car.moveCount === topRankCarMoveCount)
      .map((car) => car.name);

    printConsole(`최종 우승자 : ${topRankCars.join(", ")}`);
  }
}

export default App;
