import CarRaceController from './controllers/CarRaceController.js';

class App {
  async play() {
    const carRaceController = new CarRaceController();
    await carRaceController.init();
  }
}

export default App;
