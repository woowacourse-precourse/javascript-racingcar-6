import CarRaceController from './controller/CarRaceController.js';

class App {
  async play() {
    return new CarRaceController().startRace();
  }
}

export default App;
