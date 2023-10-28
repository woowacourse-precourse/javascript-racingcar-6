import RacingCar from '../Model/RacingCar.js';
import { View } from '../View/View.js';

export default class GameController {
  constructor() {
    this.racingCar = new RacingCar();
  }

  async start() {
    const carNames = await View.readCarNames();
    console.log(carNames);
    this.racingCar.getRacingCars(carNames);
  }
}
