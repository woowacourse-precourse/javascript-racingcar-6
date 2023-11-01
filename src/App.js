import RacingController from './controller/index.js';
import Car from './model/Car.js';
import RacingModel from './model/index.js';

class App {
  #controller;

  constructor() {
    this.#controller = new RacingController(new RacingModel(new Car()));
  }

  async play() {
    await this.#controller.startGame();
  }
}

export default App;
