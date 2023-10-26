import GameView from "../View/GameView.js";

import carInstance from "../Model/Car.js";

class GameController {
  constructor() {
    this.gameView = new GameView();
  }

  // 3. 자동차 경주 게임을 진행한다.
  init() {
    this.gameView.startGame(carInstance);
  }
}

export default GameController;
