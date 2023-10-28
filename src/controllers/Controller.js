import Car from '../models/Car.js';
import { MESSAGE } from '../constant.js';
import View from '../views/View.js';

class Controller {
  #cars;

  constructor() {
    this.#cars = [];
    this.winners = [];
  }

  async play() {
    await this.makeRaceCar();
  }

  async makeRaceCar() {
    const answer = await View.askNameAnswer(MESSAGE.ask_car_name);
    answer.forEach((name) => this.#cars.push(new Car(name)));
  }
}

export default Controller;
