import ConsoleInput from './io/ConsoleInput.js';
import MESSAGE from './constants/Message.js';
import InputManager from './utils/InputManager.js';
import RacingCar from './domain/RacingCar.js';

class RacingGame {
  #racingCars;

  start() {
    return this;
  }

  async inputRacingCarNames() {
    const input = await ConsoleInput.input(MESSAGE.INPUT_RACING_CAR_NAMES);
    const cars = InputManager.getCarNames(input);
    InputManager.validateCarName(cars);

    this.#generateRacingCars(cars);
  }

  #generateRacingCars(cars) {
    const racingCars = [];

    cars.forEach((car) => {
      const newCar = new RacingCar(car);
      racingCars.push(newCar);
    });

    this.#racingCars = racingCars;
  }
}

export default RacingGame;
