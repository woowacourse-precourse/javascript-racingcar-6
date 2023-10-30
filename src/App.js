import GameController from "./controllers/GameController.js";
import Car from "./models/Car.js";
import Attempt from "./models/Attempt.js";

class App {
  constructor() {
    this.controller = new GameController();
    this.car = new Car();
    this.attempt = new Attempt();
  }

  async play() {
    this.car.validateCarModels(await this.car.getCarModelsArr());
    await this.attempt.getRaceAttempt();

    const {carModels} = this.car;
    const {carModelsArr} = this.car;
    const attempt = this.attempt.attemptCount;

    this.controller.repeatRace(carModels, attempt);
    this.controller.printWinner(carModels, carModelsArr);
  }
}

export default App;
