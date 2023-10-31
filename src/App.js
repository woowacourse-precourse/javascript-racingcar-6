import Game from './Game';

class App {
  async play() {
    const game = new Game();
    const carArray = await game.getCarName();
    const gameCount = await game.getGameCount();
    game.gameTrial(carArray, gameCount);
    game.printWinner(carArray);
  }
}

export default App;
