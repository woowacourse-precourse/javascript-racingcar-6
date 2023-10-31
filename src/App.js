import CarRacingController from './controller/CarRacingController.js';

class App {
  #carRacingController = new CarRacingController();

  async play() {
    await this.#carRacingController.startCarRacing();
  }
}

export default App;
