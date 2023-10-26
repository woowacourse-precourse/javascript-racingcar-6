import inputView from '../view/inputView.js';
import Car from '../Model/Car.js';

export default class MainController {
  #car;

  constructor() {
    this.#car = new Car();
  }

  async preRace() {
    await this.sendCarsName();

    return console.log(this.#car.getCarsPosition());
  }

  async sendCarsName() {
    const input = await inputView.readCarName();

    return this.#car.setCarsName(input);
  }
}
