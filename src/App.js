import CarRacingController from "./Controller/CarRacingController.js";

class App {
  async play() {
    const carRacingController = new CarRacingController();
    await carRacingController.race();
  }
}

export default App;
