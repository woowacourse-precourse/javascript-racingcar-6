import CarRaceController from "./controller/CarRaceController.js";

class App {
  async play() {
    const carRaceController = new CarRaceController();
    await carRaceController.setup();
    carRaceController.startRace();
    carRaceController.showResult();
  }
}

export default App;
