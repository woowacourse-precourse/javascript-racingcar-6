import Controller from './controller/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async play() {
    await this.controller.progress();
  }
}

export default App;
