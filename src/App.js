import RaceController from "./controllers/RaceController.js";
class App {
  async play() {
    await RaceController.startRace();
  }
}

export default App;
