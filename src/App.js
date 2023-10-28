import GameController from './controller/GameController.js';
import GameView from './view/GameView.js';
import Cars from './model/Cars.js';

class App {
  async play() {
    try {
      const model = new Cars();
      const view = new GameView();
      const controller = new GameController({ model, view });
      await controller.init();
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default App;
