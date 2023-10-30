import RaceController from './controller/RaceController';

class App {
  constructor() {
    this.RaceController = new RaceController();
  }

  async play() {
    this.RaceController.runRace();
  }
}

export default App;
