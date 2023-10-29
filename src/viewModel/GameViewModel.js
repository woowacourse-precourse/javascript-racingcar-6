import Cars from "../model/Cars.js";
import Game from "../model/Game.js";

import { pickNumberInRange } from "../utils/index.js";
import { GAME_SETTING } from "../utils/constants.js";

const { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER } = GAME_SETTING;

class GameViewModel {
  constructor() {
    this.tryCount = 0;
    this.game = new Game();
    this.cars = new Cars();
  }

  racing() {
    this.moveCars();

    const status = this.getCarStatus();

    this.addGameStatus(status);
  }

  setTryCount(tryCount) {
    this.tryCount = tryCount;
  }

  addGameStatus(status) {
    this.game.addGameStatus(status);
  }

  addCars(carNames) {
    this.cars.addCars(carNames);
  }

  moveCars() {
    const cars = this.cars.getCars();

    for (let i = 0; i < cars.length; i++) {
      const randomNumber = pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

      if (randomNumber < 4) {
        continue;
      }

      const car = cars[i];

      this.cars.moveCar(car.name);
    }
  }

  getStatus() {
    return this.game.getGameStatuses();
  }

  getCarStatus() {
    return this.cars.getCars();
  }

  getWinner() {
    const status = this.getStatus();

    const lastStatus = status[this.tryCount - 1];

    const maxDistance = lastStatus.reduce((acc, car) => {
      return acc > car.distance ? acc : car.distance;
    }, 0);

    const winners = lastStatus.filter((car) => car.distance === maxDistance);

    return winners.map((car) => car.name);
  }
}

export default GameViewModel;
