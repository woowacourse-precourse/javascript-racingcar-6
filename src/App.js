import RaceController from "./controller/RaceController.js";

class App {
  async play() {
    const raceController = new RaceController();
    raceController.init();
  }
}

export default App;
