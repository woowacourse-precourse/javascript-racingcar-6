import GameController from './controller/GameController.js';

class App {
  async play() {
    await this.racingGame();
  }

  async racingGame() {
    const { settingGameFromUserInput, playRaceGame, printGameWinner } =
      GameController;

    const { cars, playCount } = await settingGameFromUserInput();
    const winner = playRaceGame(cars, playCount);
    printGameWinner(winner);
  }
}

export default App;
