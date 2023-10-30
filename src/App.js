import { inputConsoleAsync } from "./utils/index.js";
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
  }

  async registerRacingCars() {
    const cars = Validation.validateRacingCarName(
      await inputConsoleAsync(MESSAGES.COMMENT_INPUT_RACING_CARS)
    );

    if (cars) {
      this.racingCars = this.racingCars.concat(cars.map((car) => new Car(car)));
    }
  }
}

export default App;
