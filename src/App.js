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
    this.car.getCarModelsArr(await this.car.getCarModels());
    await this.attempt.getRaceAttempt();

    let carModels = this.car.carModels;
    let carModelsArr = this.car.carModelsArr;
    let attempt = this.attempt.attemptCount;

    this.controller.repeatRace(carModels, attempt);
    this.controller.printWinner(carModels, carModelsArr);
  }
}
const app = new App();
app.play();

export default App;
