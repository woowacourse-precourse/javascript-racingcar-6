import Controller from './controller/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async play() {
    await this.controller.run();
  }
}

export default App;
