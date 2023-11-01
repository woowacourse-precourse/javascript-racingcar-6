import CarRaceController from './controllers/CarRaceController.js';

class App {
  #carRaceController;

  constructor() {
    this.#carRaceController = new CarRaceController();
  }

  async play() {
    await this.#carRaceController.setupRaceEnvironment();
    this.#carRaceController.processRace();
    this.#carRaceController.printRaceResult();
  }
}

export default App;
