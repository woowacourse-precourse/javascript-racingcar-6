import RaceController from './controllers/RaceController.js';

class App {
  constructor() {
    this.raceController = new RaceController();
  }

  async play() {
    this.raceController.start();
  }
}

export default App;
