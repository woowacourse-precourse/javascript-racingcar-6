import CarManager from './CarManager';
import Initialize from './Initialize';

class App {
  constructor() {
    this.initialize = new Initialize();
  }
  async play() {
    const { names, attemptCount } = await this.initialize.initializeCarArrayAndNumber();
    this.carManager = new CarManager(names, attemptCount);
    this.carManager.play();
  }
}

export default App;
