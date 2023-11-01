import RaceGameController from "./controllers/raceGameController.js";

class App {
  async play() {
    const controller = new RaceGameController();
    await controller.run();
  }
}

export default App;
