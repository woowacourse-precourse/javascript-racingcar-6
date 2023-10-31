import RacingGame from './RacingGame';

class App {
  game = new RacingGame();

  async play() {
    await this.game.start();
  }
}

export default App;
