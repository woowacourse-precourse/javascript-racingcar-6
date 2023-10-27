import Controller from './Controller/Controller.js';

class App {
  async play() {
    const controller = new Controller();

    controller.startGame();
  }
}

export default App;