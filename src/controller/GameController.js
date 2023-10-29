import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";
import CustomError from "../core/CustomError.js";
import GameModel from "../model/GameModel.js";

import { pickNumberInRange } from "../utils/index.js";
import { GAME_SETTING } from "../utils/constants.js";

const { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER } = GAME_SETTING;

class GameController {
  constructor() {
    this.model = null;
    this.inputView = null;
    this.outputView = null;
  }

  async start() {
    try {
      await this.init();
      this.racing();
      this.setWinners();
    } catch (error) {
      throw new CustomError(error.message);
    }
  }

  async init() {
    this.model = new GameModel();
    this.inputView = new InputView({ model: this.model });

    const { carNames, tryCount } = await this.inputView.inputData();

    this.model.initData({ carNames, tryCount });
    this.outputView = new OutputView({ model: this.model });
  }

  racing() {
    const { tryCount } = this.model.getData();

    for (let i = 0; i < tryCount; i++) {
      this.move();
    }
  }

  move() {
    const { cars, currentTryCount } = this.model.getData();

    const newCars = [];

    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];
      const randomNumber = pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

      const currentCar = randomNumber < 4 ? car : { ...car, distance: car.distance + 1 };

      newCars.push(currentCar);
    }

    this.model.setData({ cars: newCars, currentTryCount: currentTryCount + 1 });
  }

  setWinners() {
    const { cars } = this.model.getData();

    const maxDistance = Math.max(...cars.map((car) => car.distance));

    const winners = cars.filter((car) => car.distance === maxDistance).map((car) => car.name);

    this.model.setData({ winners });
  }
}

export default GameController;
