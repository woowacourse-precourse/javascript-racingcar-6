import CarController from "./controller/car-controller.js";
import RaceController from "./controller/race-controller.js";

class App {
  constructor() {
    this.carController = new CarController();
    this.raceController = new RaceController();
  }

  async play() {
    await this.carController.init();
    await this.raceController.init();

    this.raceController.startRace(this.carController);
    this.raceController.prize(this.carController);
  }
}

export default App;
