import Game from './Game';

class App {
  async play() {
    let game = new Game();
    let carArray = await game.getCarName();
    let gameCount = await game.getGameCount();
    game.gameTrial(carArray, gameCount);
    game.printWinner(carArray);
  }
}

export default App;
