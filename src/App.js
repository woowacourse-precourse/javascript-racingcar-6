import MainController from './Controller/Controller.js';

class App {
  async play() {
    const mainController = new MainController();
    await mainController.preRace();
  }
}

export default App;
