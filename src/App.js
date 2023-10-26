import GameController from "./RacingcarGame/GameController";

class App {
  async play() {
    const gameController = new GameController();
    await gameController.start();
  }
}

export default App;
