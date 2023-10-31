// App.js
import RaceController from "./src/controllers/RaceController.js";
class App {
  constructor() {
    this.raceController = new RaceController();
  }

  async play() {
    await this.raceController.initRace();
  }
}

export default App;
