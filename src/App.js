import CarName from './CarName.js';

class App {
  constructor() {
    this.carName = new CarName();
  }
  async play() {
    await this.carName.start();
  }
}

export default App;
