import RaceController from "./controllers/RaceController.js";

class App {
  constructor() {
    this.raceController = new RaceController();
  }

  async play() {
    try {
      await this.raceController.initRace();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
