import MainController from './Controller/MainController.js';

class App {
  async play() {
    const mainController = new MainController();
    await mainController.preRace();
  }
}

export default App;
