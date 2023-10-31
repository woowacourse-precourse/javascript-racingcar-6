import { GameController } from "./controller/GameController.js";
import { GameLogic } from "./logic/GameLogic.js";
import { GameView } from "./view/GameView.js";
export class App {
  async play() {
    const logic = new GameLogic();
    const view = new GameView();
    const controller = new GameController(logic, view);
    await controller.startGame();
  }
}

export default App;
