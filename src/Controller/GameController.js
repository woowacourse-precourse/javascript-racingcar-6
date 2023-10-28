import RacingCar from '../Model/RacingCar.js';
import { View } from '../View/View.js';

export default class GameController {
  constructor() {
    this.racingCar = new RacingCar();
  }

  async start() {
    const carNames = await View.readCarNames();
    this.racingCar.getRacingCars(carNames);
  }
}
