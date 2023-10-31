import { GameController } from "./controller/GameController.js";
import { GameLogic } from "./logic/GameLogic.js";
import { GameView } from "./view/GameView.js";
export class App {
  async play() {
    try {
      const logic = new GameLogic();
      const view = new GameView();
      const controller = new GameController(logic, view);
      await controller.startGame();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
