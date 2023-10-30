import Controller from './controllers/Controller.js';

class App {
  async play() {
    const controller = new Controller();
    await controller.startGame();
  }
}

export default App;
