import RaceController from "./controller/RaceController.js";

class App {
  async play() {
    const raceController = new RaceController();
    await raceController.gameStart();
  }
}

export default App;
