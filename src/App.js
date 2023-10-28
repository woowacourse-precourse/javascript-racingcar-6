import GameRaceController from './controllers/CarRaceController.js';

class App {
  async play() {
    const gameRaceController = new GameRaceController();
    await gameRaceController.initializeGame();
    gameRaceController.playGame();
    gameRaceController.getGameResult();
    gameRaceController.printWinner();
  }
}

export default App;
