import { InputView } from "../View/InputView.js";
import Car from "../Model/Car.js";

class RacingGame {
  #car;
  constructor() {
    this.#car = [];
  }

  async start() {
    this.inputCarName();
  }
  
  async inputCarName() {
    const carArr = await InputView.inputCarsName();
    for (const carName of carArr) {
      let car = new Car();
      car.getName(carName);
      this.#car.push(car);
    }
  }
}

export default RacingGame;