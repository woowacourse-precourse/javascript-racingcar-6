import CarGameController from './controller/CarGameController.js';

class App {
  async play() {
    return new CarGameController().start();
  }
}

export default App;
