import Controller from './controllers/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async play() {
    await this.controller.play();
  }
}

export default App;
