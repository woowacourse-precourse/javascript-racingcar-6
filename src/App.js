import GameController from './controller/GameController.js';
import GameView from './view/GameView.js';
import Players from './model/Players.js';

class App {
  async play() {
    try {
      const model = new Players();
      const view = new GameView();
      const controller = new GameController({ model, view });
      await controller.start();
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default App;
